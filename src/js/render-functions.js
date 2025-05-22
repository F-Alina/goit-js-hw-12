import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox;
const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.btn-load');

const box = document.querySelector('.gallery-item');

function createGallery(images) {
  return images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<li class="gallery-item">
      <a class="gallery-link" href="${largeImageURL}">
        <img
          class="gallery-image"
          src="${webformatURL}"
          alt="${tags}"
          width = "360"
        />
      </a>
      <div class="gallery-content">
		<ul class="gallery-content-wrapper">
			<li>Likes<span>${likes}</span></li>
			<li>Views<span>${views}</span></li>
			<li>Comments<span>${comments}</span></li>
			<li>Downloads<span>${downloads}</span></li>
		</ul>
	</div>
    </li>`
    )
    .join('');
}
function clearGallery() {
  gallery.innerHTML = '';
}

function showLoader() {
  loader.classList.add('visible');
}

function hideLoader() {
  loader.classList.remove('visible');
}

function showLoadMoreButton() {
  loadMoreBtn.classList.add('visible');
}

function hideLoadMoreButton() {
  loadMoreBtn.classList.remove('visible');
}

function initializeLightbox() {
  lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
  });
}

function refreshLightbox() {
  if (lightbox) {
    lightbox.refresh();
  }
}

export {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  initializeLightbox,
  refreshLightbox,
  showLoadMoreButton,
  hideLoadMoreButton,
};
