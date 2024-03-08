let photos = ['./img/img1.jpg', './img/img2.jpg', './img/img3.jpg', './img/img4.jpg', './img/img5.jpg', './img/img6.jpg', './img/img7.jpg', './img/img8.jpg', './img/img9.jpg', './img/img10.jpg', './img/img11.jpg', './img/img12.jpg', './img/img13.jpg', './img/img14.jpg', './img/img15.jpg',  './img/img16.jpg',  './img/img17.jpg',  './img/img18.jpg', './img/img19.jpg', './img/img20.jpg', './img/img21.jpg', './img/img22.jpg', './img/img23.jpg', './img/img24.jpg'];
let imgIndex = 0;
let diashowTimeout;


function render() {
    let contentImg = document.getElementById('img-container');
    contentImg.innerHTML = '';

    for (let i = 0; i < photos.length; i++) { 
        contentImg.innerHTML += addPhotoToGallery(i);
    }
}


function addPhotoToGallery(i) {
    return /*html*/`
    <div class="img-box" onclick="photoBig(${i})">
        <img src=${photos[i]} class="img-photos">
        <div class="overlay"></div>
    </div>
    `;
}


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


function left() {
    imgIndex--;
    if (imgIndex < 0) {
        imgIndex = photos.length - 1;
    }
    photoBig(imgIndex);
}


function right() {
    imgIndex++;
    if (imgIndex >= photos.length) {
        imgIndex = 0;
    }
    photoBig(imgIndex);
}


function startDiashow() {
    document.getElementById('btn-diashow').classList.add('background-color');
    diashowTimeout = setTimeout(function() {
        right();
        startDiashow();
    }, 2000);
}


function pauseDiashow() {
    document.getElementById('btn-diashow').classList.remove('background-color');
    clearTimeout(diashowTimeout);
}


function closePopUpBigPhoto() {
    document.getElementById('pop-up-photoBig').classList.remove('animatePhotoBigZoomIn');
    document.getElementById('pop-up-photoBig').classList.add('animatePhotoBigZoomOut');
    setTimeout(function () {
        document.getElementById('pop-up-photoBig').classList.add('pop-up-none');
    },900);
    document.getElementById('btn-diashow').classList.remove('background-color');
    clearTimeout(diashowTimeout);
}


function openPopUpQuestion() {
    document.getElementById('pop-up-question').classList.remove('pop-up-none');
}


function closePopUpQuestion() {
    document.getElementById('pop-up-question').classList.add('pop-up-none');
}


function refresh() {
    render();
}