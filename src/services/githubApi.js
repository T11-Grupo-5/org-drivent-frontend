import qs from 'qs';
import api from './api';

// Função para redirecionar o usuário para a autenticação no GitHub
function redirectToGitHub() {
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

async function handleGitHubCode(code) {
  const response = await api.post('/auth/github', { code });
  console.log(response.data);
  return response.data;
}

export { redirectToGitHub, handleGitHubCode };
