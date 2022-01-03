import './style.css';

const holderPhoto = document.querySelector('.holderPhoto');
const btnLeft = document.querySelector('#btnLeft');
const btnRight = document.querySelector('#btnRight');
const imgCollection = document.getElementsByClassName('fixerPhoto');
const URL = 'https://dog.ceo/api/breed/hound/images';
const array = [];
let counter = 0;

window.addEventListener('DOMContentLoaded', getPhotos);
btnLeft.addEventListener('click', btnPrev);
btnRight.addEventListener('click', btnNext);

async function getPhotos() {
    try {
        await fetch(URL)
            .then(res => res.json())
            .then(data => data.message.forEach(element => array.push(element)))
        getSomePhotos(0)
    } catch (e) {
        console.log(e)
    }
}

const renderPhotos = (array) => {
    if (holderPhoto.children.length === 0) {
        let photoId = 0;
        createElemPhoto(array, photoId);
        for (const img of imgCollection) {
            img.addEventListener('click', createBigImg);
        }
    } else {
        holderPhoto.innerHTML = '';
        renderPhotos(array);
    }
}

const getSomePhotos = (starter) => {
    let start = starter * 24;
    let end = start + 24;
    let numberOfItems = array.slice(start, end);
    return renderPhotos(numberOfItems);
}

function btnNext() {
    counter++;
    return getSomePhotos(counter);
}

function btnPrev() {
    if (counter === 0) {
        return;
    } else {
        counter--;
        return getSomePhotos(counter);
    }
}

function createElemPhoto(array, photoId) {
    for (const value of array) {
        photoId++;
        const span = document.createElement('span');
        const img = document.createElement('img');
        span.id = photoId;
        img.src = value;
        img.className = 'fixerPhoto';
        holderPhoto.append(span);
        span.append(img);
    }
}
function createBigImg() {
    const div = document.createElement('div');
    const img = document.createElement('img');
    div.id = 'remove-id';
    holderPhoto.prepend(div);
    div.prepend(img);
    img.src = this.src;
    const remover = document.getElementById('remove-id');
    remover.addEventListener('click', removeBigImageBtn);
}
function removeBigImageBtn(e) {
    return e.target.parentElement.style.display = 'none';

}
/* module.exports = getPhotos;
module.exports = renderPhotos;
module.exports = getSomePhotos;
module.exports = createElemPhoto;
module.exports = createBigImg;
module.exports = removeBigImageBtn; */