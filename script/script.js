/* Arrays and variables*/
let photos = ['./img/img1.jpg', './img/img2.jpg', './img/img3.jpg', './img/img4.jpg', './img/img5.jpg', './img/img6.jpg', './img/img7.jpg', './img/img8.jpg', './img/img9.jpg', './img/img10.jpg', './img/img11.jpg', './img/img12.jpg', './img/img13.jpg', './img/img14.jpg', './img/img15.jpg',  './img/img16.jpg',  './img/img17.jpg',  './img/img18.jpg', './img/img19.jpg', './img/img20.jpg', './img/img21.jpg', './img/img22.jpg', './img/img23.jpg', './img/img24.jpg'];
let imgIndex = 0;
let diashowRunning = false;
let diashowTimeout;


/**
 * This function gets loaded in the beginning to render the images from the array "photos".
 */
function render() {
    let contentImg = document.getElementById('img-container');
    contentImg.innerHTML = '';
    for (let i = 0; i < photos.length; i++) { 
        contentImg.innerHTML += addPhotoToGallery(i);
    }
}


/**
 * This functions adds the image in a html-box.
 * @param {Number} i - The index of the image.
 * @returns - The html-element gets returned.
 */
function addPhotoToGallery(i) {
    return /*html*/`
    <div class="img-box" onclick="photoBig(${i})">
        <img src=${photos[i]} class="img-photos">
        <div class="overlay"></div>
    </div>
    `;
}


/**
 * This function opens a pop-up, which shows the clicked photo big.
 * @param {Number} i - This is the number of the image you click on, which is then the current imgIndex.
 */
function photoBig(i) {
    imgIndex = i;
    document.getElementById('pop-up-photoBig').classList.remove('pop-up-none');
    document.getElementById('pop-up-photoBig').classList.remove('animatePhotoBigZoomOut');
    document.getElementById('pop-up-photoBig').classList.add('animatePhotoBigZoomIn');
    let content = document.getElementById('photoBig');
    content.innerHTML = /*html*/`
        <img src=${photos[i]} class="img-photoBig" id="imgPhotoBig">
    `;
}


/**
 * This function shows the one lower image in the array in big.
 */
function left() {
    imgIndex--;
    if (imgIndex < 0) {
        imgIndex = photos.length - 1;
    }
    photoBig(imgIndex);
}


/**
 * This function shows the one bigger image in the array in big.
 */
function right() {
    imgIndex++;
    if (imgIndex >= photos.length) {
        imgIndex = 0;
    }
    photoBig(imgIndex);
}


/**
 * This function starts the diashow to show the big photos.
 */
function startDiashow() {
    if(!diashowRunning) {
        diashowRunning = true;
        document.getElementById('btn-diashow').classList.add('background-color');
        diashowTimeout = setTimeout(function() {
            right();
            diashowRunning = false;
            startDiashow();
        }, 2000);
    }

}


/**
 * This function pauses the diashow.
 */
function pauseDiashow() {
    if (diashowRunning) {
        document.getElementById('btn-diashow').classList.remove('background-color');
        clearTimeout(diashowTimeout);
        diashowRunning = false;
    }
}


/**
 * This function closes the photo big with an animation and stoppes the diashow.
 */
function closePopUpBigPhoto() {
    document.getElementById('pop-up-photoBig').classList.remove('animatePhotoBigZoomIn');
    document.getElementById('pop-up-photoBig').classList.add('animatePhotoBigZoomOut');
    setTimeout(function () {
        document.getElementById('pop-up-photoBig').classList.add('pop-up-none');
    },900);
    document.getElementById('btn-diashow').classList.remove('background-color');
    clearTimeout(diashowTimeout);
}


/**
 * This function opens the pop-up with a small description from the page.
 */
function openPopUpQuestion() {
    document.getElementById('pop-up-question').classList.remove('pop-up-none');
}


/**
 * This function closes the pop-up with the samll description.
 */
function closePopUpQuestion() {
    document.getElementById('pop-up-question').classList.add('pop-up-none');
}


/**
 * This function refreshes the page.
 */
function refresh() {
    render();
}