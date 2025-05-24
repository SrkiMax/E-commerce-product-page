
const overlay = document.querySelector(".overlay");
const mainImage = document.querySelector(".main-image");
const closeLightbox = document.querySelector(".close-lightbox");

const bigPicture = document.querySelector(".big-picture");
const thumbnailWrappers = document.querySelectorAll(".thumbnail-wrapper");
const thumbnails = document.querySelectorAll(".thumbnail");

const minusBtn = document.getElementById("minus");
const quantity = document.querySelector(".quantity");
const plusBtn = document.getElementById("plus");
const addToCartBtn = document.querySelector(".add-to-cart");

const menuToggle = document.getElementById('menuToggle');
const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById('navLinks');

const cartIcon = document.querySelector(".cart-icon");
const cartDropdown = document.querySelector(".cart-dropdown");
const cartContent = document.querySelector(".cart-content");




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





// Cart dropdown

cartIcon.addEventListener("click", () => {
    cartDropdown.style.display = cartDropdown.style.display === "block" ? "none" : "block";
});

// Hide the cart when clicking outside
document.addEventListener("click", (event) => {
    const isClickInsideCart = cartDropdown.contains(event.target);
    const isClickOnIcon = cartIcon.contains(event.target);

    if (!isClickInsideCart && !isClickOnIcon) {
        cartDropdown.style.display = "none";
    }
});


const item = {
    name: "Fall Limited Edition Sneakers",
    price: 125.00,
    thumbnail: "images/image-product-1-thumbnail.jpg"
}


addToCartBtn.addEventListener("click", () => {

    if (parseInt(quantity.textContent) === 0) {
        cartContent.innerHTML = '<p class="empty-cart-text">Your cart is empty</p>';
    } else {
        cartContent.innerHTML =
            `<div class="ordered-div">
    <img src="${item.thumbnail}" class="" alt="...">
    <div class="ordered-text">
      <p class="item-name">${item.name}</p>
      <div class="cart-calculation">
        <p>$${item.price} x ${parseInt(quantity.textContent)}</p>
        <span> $${item.price * parseInt(quantity.textContent)}</span>

      </div>
    </div>
    <div class="delete-icon">
      <img src="images/icon-delete.svg" alt="">
    </div>
  </div>
  <button type="button" class="btn btn-warning checkoutBtn">Checkout</button>`;

        const deleteIcon = document.querySelector(".delete-icon img");

        deleteIcon.addEventListener("click", () => {
            /*Give the delete icon some delay so it doesn't delete itself from the DOM, since deleteIcon is also part of cart dropdown */
            setTimeout(() => {
                emptyCart();
                resetQuantity();
            }, 10)

        });
    }

});

const resetQuantity = () => {
    quantity.textContent = 0;
}


/*Empty cart*/

const emptyCart = () => {
    cartContent.innerHTML = '<p class="empty-cart-text">Your cart is empty</p>';
};




// Mobile menu
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');

    if (navLinks.classList.contains("show")) {
        menuIcon.src = "images/icon-close.svg";
    } else {
        menuIcon.src = "images/icon-menu.svg";
    }
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



