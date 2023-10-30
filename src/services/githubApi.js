import qs from 'qs';

export default function redirectToGitHub() {
  const params = {
    response_type: 'code',
    client_id: import.meta.env.VITE_GITHUB_CLIENT_ID,
    redirect_uri: import.meta.env.VITE_GITHUB_REDIRECT_URL,
    scope: 'user',
  };
  const queryStrings = qs.stringify(params);
  const authURL = `${import.meta.env.VITE_GITHUB_URL}?${queryStrings}`;
  window.location.href = authURL;
}
