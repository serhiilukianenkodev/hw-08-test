import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';

const galleryEl = document.querySelector('.gallery');

galleryEl.innerHTML = createGallery(galleryItems);

new SimpleLightbox('.gallery a', {
  captionPosition: 'top',
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionDelay: 250,
});

function createGallery(list) {
  return list
    .map(
      ({ preview, original, description }) => `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </li>`
    )
    .join('');
}
