import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  initializeLightbox,
  refreshLightbox,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formSearch = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const searchInput = document.querySelector('.form-search-input');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.btn-load');

let currentPage = 1;
let queryValue = '';
const perPage = 15;
let cardHeight = 0;

initializeLightbox();
hideLoadMoreButton();

function scrollToMoreContent() {
  const card = document.querySelector('.gallery-item');
  if (card) {
    cardHeight = card.getBoundingClientRect().height;

    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  }
}

formSearch.addEventListener('submit', async e => {
  e.preventDefault();
  hideLoader();
  queryValue = searchInput.value.trim();

  if (!queryValue) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please fill in the input field!',
    });
    return;
  }

  currentPage = 1;

  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(queryValue, currentPage);
    hideLoader();

    if (!data.hits.length) {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      hideLoadMoreButton();
    } else {
      gallery.innerHTML = createGallery(data.hits);

      refreshLightbox();

      const card = document.querySelector('.gallery-item');
      if (card) {
        cardHeight = card.getBoundingClientRect().height;
      }

      if (data.totalHits > perPage) {
        showLoadMoreButton();
      } else {
        iziToast.info({
          title: 'Info',
          message: "We're sorry, but you've reached the end of search results.",
        });

        hideLoadMoreButton();
      }
    }

    formSearch.reset();
  } catch (err) {
    hideLoader();
    console.log(err);
  }
});

loadMoreBtn.addEventListener('click', async () => {
  currentPage += 1;
  showLoader();

  try {
    const data = await getImagesByQuery(queryValue, currentPage);

    hideLoader();

    gallery.insertAdjacentHTML('beforeend', createGallery(data.hits));

    refreshLightbox();

    scrollToMoreContent();

    if (currentPage * perPage >= data.totalHits) {
      hideLoadMoreButton();
      iziToast.info({
        title: 'Info',
        message: "We're sorry, but you've reached the end of search results.",
      });
    }
  } catch (err) {
    hideLoader();
    console.log(err);
  }
});
