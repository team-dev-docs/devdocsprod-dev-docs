import React from 'react';
import Layout from '@theme/Layout';
import { AUTH_CONFIG } from '../../config/auth';

export default function Login(): JSX.Element {
  const initiateGitHubLogin = () => {
    // Generate random state
    const state = Math.random().toString(36).substring(7);
    localStorage.setItem('oauth_state', state);

    // Build GitHub OAuth URL
    const authUrl = new URL(AUTH_CONFIG.authorizationEndpoint);
    authUrl.searchParams.append('client_id', AUTH_CONFIG.clientId);
    authUrl.searchParams.append('redirect_uri', AUTH_CONFIG.redirectUri);
    authUrl.searchParams.append('scope', AUTH_CONFIG.scope);
    authUrl.searchParams.append('state', state);

    // Redirect to GitHub
    window.location.href = authUrl.toString();
  };

  return (
    <Layout title="Login">
      <div className="container margin-vert--xl">
        <div className="text--center">
          <h1>Login</h1>
          <p>Please login with your GitHub account to continue.</p>
          <button
            onClick={initiateGitHubLogin}
            className="button button--primary button--lg"
          >
            Login with GitHub
          </button>
        </div>
      </div>
    </Layout>
  );
} 