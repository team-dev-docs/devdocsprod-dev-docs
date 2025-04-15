export const getRedirectUri = () => {
  if (typeof window !== 'undefined') {
    return `${window.location.origin}/auth/callback`;
  }
  return '/auth/callback'; // Fallback for server-side
};

export const AUTH_CONFIG = {
  clientId: 'Ov23li8WiEu9TmRU700s',
  redirectUri: getRedirectUri(),
  authorizationEndpoint: 'https://github.com/login/oauth/authorize',
  scope: 'read:user user:email codespace',
  tokenEndpoint: 'https://fastify-serverless-function-olive.vercel.app/token',
  userInfoEndpoint: 'https://api.github.com/user',
  setTokenEndpoint: 'https://interactive-docs.devdocs.sh/return_token',
  interactiveDocsBaseUrl: 'https://interactive-docs.devdocs.sh',
}; 