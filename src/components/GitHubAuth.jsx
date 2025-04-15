import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { IconGitHub } from './ui/Icon';
import aiConfig from '@site/ai.json';
import { AUTH_CONFIG } from '../../src/config/auth.ts'
import { useColorMode } from '@docusaurus/theme-common';
import BrowserOnly from '@docusaurus/BrowserOnly';

function GitHubAuthContent() {
  const { colorMode } = useColorMode()
  const buttonStyle = {
    borderRadius: '1rem',
    border: colorMode === 'dark' ? '1px solid #DD7BFF' : '1px solid #DD7BFF',
    backgroundColor: colorMode === 'dark' ? '#0A0A0A' : '#0A0A0A',
    boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.30), 0px 12px 24px 0px rgba(0, 0, 0, 0.20)'
}
  if (!aiConfig.github_features) {
    return null;
  }

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('github_token');
    const userInfo = localStorage.getItem('github_userinfo');
    const userInfoJson = JSON.parse(userInfo);
    if (token) {
      setIsAuthenticated(true);
      fetchUserInfo(userInfoJson);
    }
  }, []);

  const fetchUserInfo = async (userInfoJson) => {
    try {
      setUserInfo(userInfoJson);
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  };

  const setCodespacesUrl = () => {

  }

  const handleLogin = () => {
    try {
      const state = Math.random().toString(36).substring(7);
      localStorage.setItem('oauth_state', state);
      console.log(AUTH_CONFIG.authorizationEndpoint)
      const githubAuthUrl = new URL(AUTH_CONFIG.authorizationEndpoint);
      githubAuthUrl.searchParams.append('state', state);
      githubAuthUrl.searchParams.append('client_id', AUTH_CONFIG.clientId);
      githubAuthUrl.searchParams.append('redirect_uri', AUTH_CONFIG.redirectUri);
      githubAuthUrl.searchParams.append('scope', AUTH_CONFIG.scope);
      console.log(AUTH_CONFIG.authorizationEndpoint)
      console.log(githubAuthUrl.toString());
      window.location.href = githubAuthUrl.toString();
    } catch (err) {
      console.error('Login error:', err);
      setError('Failed to initialize GitHub login');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('github_token');
    localStorage.removeItem('oauth_state');
    setIsAuthenticated(false);
    setUserInfo(null);
    setError(null);
  };

  if (error) {
    return (
      <div className="text-red-500">
        <p>{error}</p>
        <Button onClick={() => setError(null)} variant="outline" size="sm">
          Dismiss
        </Button>
      </div>
    );
  }

  return (
    <div>
      {!isAuthenticated ? (
        <Button 
          onClick={handleLogin} 
          style={buttonStyle}
          className="flex items-center gap-2"
          type="button"
        >
          <IconGitHub className="w-4 h-4" />
          Sign in with GitHub
        </Button>
      ) : (
        <div className="flex items-center gap-2">
          {userInfo && (
            <img 
              src={userInfo.avatar_url} 
              alt={userInfo.login}
              className="w-6 h-6 rounded-full"
            />
          )}
          <Button 
            onClick={handleLogout} 
            style={buttonStyle}
            variant="outline"
            type="button"
          >
            Sign Out
          </Button>
        </div>
      )}
    </div>
  );
}

export default function GitHubAuth() {
  return (
    <BrowserOnly>
      {() => <GitHubAuthContent />}
    </BrowserOnly>
  );
} 