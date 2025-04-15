import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from '@docusaurus/router';
import Layout from '@theme/Layout';
import { AUTH_CONFIG } from '../../config/auth.ts';



export default function AuthCallback(): JSX.Element {
  const [error, setError] = useState<string>('');
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const setCodespaces = async (token: string) => {
      const myHeaders = new Headers();
      myHeaders.append("x-github-token", token);
      myHeaders.append("Content-Type", "application/json");
      
      const raw = JSON.stringify({
        "owner": "team-dev-docs",
        "repo": "codespace-executor"
      });
      
      const requestOptions: any = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };
      
      try {
        const response = await fetch("http://localhost:3002/codespaces", requestOptions);
        if (!response.ok) {
          throw new Error('Failed to create codespace');
        }
        const data = await response.json();
        return data?.codespace?.name;
      } catch (error) {
        console.error('Codespace creation error:', error);
        throw new Error('Failed to create codespace');
      }
    }

    const generateRandomString = (length: number): string => {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let result = '';
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return result;
    }

    const setEncryptedToken = async (token: string) => {
      let randSet = ["f", "b"][Math.floor(Math.random() * 2)];
      const randomString = generateRandomString(32);
      const response = await fetch(AUTH_CONFIG.setTokenEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          token: token,
          randSet: randSet,
          randomString: randomString
        }),
      });

      const data = await response.json();
      if (data.access_token) {
        let buffer = btoa(JSON.stringify({randSet, randomString, token: data.access_token}));
        localStorage.setItem('github_token', buffer);
      }
    }

    const handleCallback = async () => {
      const searchParams = new URLSearchParams(location.search);
      const code = searchParams.get('code');
      const state = searchParams.get('state');
      const savedState = localStorage.getItem('oauth_state');

      // Verify state to prevent CSRF attacks
      if (state !== savedState) {
        setError('Invalid state parameter. Please try again.');
        return;
      }

      if (code) {
        try {
          console.log("here is the code", code)
          console.log("here is the token endpoint", AUTH_CONFIG.tokenEndpoint)
          // Exchange code for token using our server endpoint
          const response = await fetch(AUTH_CONFIG.tokenEndpoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
              code,
              state,
              redirect_uri: AUTH_CONFIG.redirectUri 
            }),
          });

          if (!response.ok) {
            throw new Error('Token exchange failed');
          }

          const data = await response.json();

          if (data.error) {
            throw new Error(data.error_description || data.error);
          }

          if (data.access_token) {
            await setEncryptedToken(data.access_token);
            localStorage.setItem('github_userinfo', JSON.stringify(data.userinfo));
            localStorage.removeItem('oauth_state');
            
            try {
              const codespace = await setCodespaces(data.access_token);
              localStorage.setItem('codespace', codespace);
              history.push('/');
            } catch (error) {
              console.log("here is the error", error)
              //setError('Failed to set up codespace. Please try again.');
            }
            history.push('/');
          } else {
            throw new Error('No access token received');
          }
        } catch (error) {
          console.error('Authentication error:', error);
          setError(error instanceof Error ? error.message : 'Failed to authenticate. Please try again.');
        }
      }
    };

    handleCallback();
  }, [location, history]);

  if (error) {
    return (
      <Layout title="Authentication Error">
        <div className="container margin-vert--xl">
          <div className="text--center">
            <h1>Authentication Error</h1>
            <p>{error}</p>
            <button
              onClick={() => history.push('/auth/login')}
              className="button button--secondary button--lg"
            >
              Try Again
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title="Authenticating...">
      <div className="container margin-vert--xl">
        <div className="text--center">
          <h1>Authenticating...</h1>
          <p>Please wait while we complete your authentication.</p>
        </div>
      </div>
    </Layout>
  );
} 