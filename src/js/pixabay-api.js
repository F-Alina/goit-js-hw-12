import axios from 'axios';
import 'izitoast/dist/css/iziToast.min.css';

const perPage = 15;

async function getImagesByQuery(query, page) {
  const searchParams = new URLSearchParams({
    key: '50274230-e09cffa3049f5c538182e0b60',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: perPage,
    page: page,
  });

  try {
    const response = await axios.get(
      `https://pixabay.com/api/?${searchParams}`
    );
    return response.data;
  } catch (err) {
    throw err;
  }
}

export { getImagesByQuery };
