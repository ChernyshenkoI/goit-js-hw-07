import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEL = document.querySelector(".gallery")

function createMarkup(arr) {

  const result = arr.map(({ preview, original, description }) => {

    return `<div class="gallery__item">
    <a class="gallery__link" href="">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`

  }).join("");



  galleryEL.innerHTML = result;
};

createMarkup(galleryItems);


galleryEL.addEventListener("click", onImageClick);

function onImageClick(event) {
  event.preventDefault()

  if (event.target.nodeName !== 'IMG') {
    return
  }


  const { source } = event.target.dataset;

  const instance = basicLightbox.create(`
<img src="${source}"  alt="flowers"/>
`)
  instance.show()
}

