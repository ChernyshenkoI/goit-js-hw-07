import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEL= document.querySelector(".gallery")

function createMarkup (arr){

    const result = arr.map(({preview,original,description})=> {

   return `<div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
      <img
        class="${original}"
        src="${preview}"
        data-source="large-image.jpg"
        alt="${description}"
      />
    </a>
  </div>/`

    }).join("")
  
    galleryEL.appendChild()

   }




console.log(galleryItems);


{
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },