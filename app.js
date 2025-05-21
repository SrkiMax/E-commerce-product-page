
const overlay = document.querySelector(".overlay");
const mainImage = document.querySelector(".main-image");
const closeLightbox = document.querySelector(".close-lightbox");

const bigPicture = document.querySelector(".big-picture");
const thumbnailWrappers = document.querySelectorAll(".thumbnail-wrapper");
const thumbnails = document.querySelectorAll(".thumbnail");

const minusBtn = document.getElementById("minus");
const quantity = document.querySelector(".quantity");
const plusBtn = document.getElementById("plus");

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

plusBtn.addEventListener("click", () => {
    let currentDigit = parseInt(quantity.textContent);
    quantity.textContent = currentDigit + 1;
});

minusBtn.addEventListener("click", () => {
    let currentDigit = parseInt(quantity.textContent);
    if (currentDigit > 0) {
        quantity.textContent = currentDigit - 1;
    }
});


// Mobile menu
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});



const resetThumbnailsStyle = () => {
    thumbnails.forEach((thumbnail) => {
        thumbnail.style.opacity = "1";
        thumbnail.classList.remove("selected");
    });

    thumbnailWrappers.forEach((wrapper) => {
        wrapper.classList.remove("selected");
    });
};


thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
        bigPicture.setAttribute('src', thumbnail.src);

        resetThumbnailsStyle();
        thumbnail.style.opacity = "0.3";

        thumbnail.classList.add("selected");

        thumbnail.parentElement.classList.add("selected");


    });
});



mainImage.addEventListener("click", () => {
    overlay.style.display = "flex";
})


closeLightbox.addEventListener("click", () => {
    overlay.style.display = "none";
})