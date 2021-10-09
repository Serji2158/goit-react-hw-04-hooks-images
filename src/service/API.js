const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "23675334-f5a1abcfe20e79567add0d4e1";

function fetchGallery(query, page = 1) {
  return fetch(
    `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Нет картинки с именем ${query}`));
  });
}

const api = {
  fetchGallery,
};

export default api;
