import config from '../config';

function getResource(path) {
  return fetch(`${config.URL_BACKEND}/categories${path}`)
    .then(async (response) => {
      if (response.ok) {
        const json = await response.json();
        return json;
      }

      throw new Error('Não foi possível obter os dados do servidor :(');
    });
}

function getAll() {
  return getResource('');
}

function getAllWithVideos() {
  return getResource('?_embed=videos');
}

export default {
  getAll,
  getAllWithVideos,
};
