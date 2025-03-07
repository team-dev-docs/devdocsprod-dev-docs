import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { IconGitHub } from './ui/Icon';
import { AUTH_CONFIG } from '../config/auth';
import aiConfig from '@site/ai.json';

export default function GitHubAuth() {
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
      let currentUrl = `${window.location.origin}/auth/callback`;
      let values = JSON.stringify({
        url: currentUrl,
        state: state
      });
      values = btoa(values);
      localStorage.setItem('oauth_state', values);
      
      if (!AUTH_CONFIG.GITHUB_CLIENT_ID) {
        setError('GitHub Client ID is not configured');
        console.error('GitHub Client ID is missing in AUTH_CONFIG');
        return;
      }

      const githubAuthUrl = new URL('https://github.com/login/oauth/authorize');
      githubAuthUrl.searchParams.append('client_id', AUTH_CONFIG.GITHUB_CLIENT_ID);
      githubAuthUrl.searchParams.append('redirect_uri', AUTH_CONFIG.GITHUB_CALLBACK_URL);
      githubAuthUrl.searchParams.append('state', values);
      githubAuthUrl.searchParams.append('scope', 'read:user codespace');
      
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