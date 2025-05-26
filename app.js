
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
const cartBadge = document.querySelector(".badge");
const cartDropdown = document.querySelector(".cart-dropdown");
const cartContent = document.querySelector(".cart-content");




plusBtn.addEventListener("click", () => {
    const qty = parseInt(quantity.textContent);
    quantity.textContent = qty + 1;
});

minusBtn.addEventListener("click", () => {
    const qty = parseInt(quantity.textContent);
    if (qty > 0) {
        quantity.textContent = qty - 1;
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

    const qty = parseInt(quantity.textContent);
    if (qty === 0) {
        cartContent.innerHTML = '<p class="empty-cart-text">Your cart is empty</p>';

    } else {
        // Clear existing cart content        
        cartContent.innerHTML = "";

        // Create parent div
        const orderedDiv = document.createElement("div");
        orderedDiv.className = "ordered-div"

        // Create image
        const thumbImg = document.createElement("img");
        thumbImg.src = item.thumbnail;
        thumbImg.alt = item.name;

        // Create text wrapper
        const orderedText = document.createElement("div");
        orderedText.className = "ordered-text";

        const itemName = document.createElement("p");
        itemName.className = "item-name";
        itemName.textContent = item.name;

        const cartCalc = document.createElement("div");
        cartCalc.className = "cart-calculation";

        const priceText = document.createElement("p");
        priceText.textContent = `$${item.price} x ${qty}`;

        const totalText = document.createElement("span");
        totalText.textContent = `$${item.price * qty}`;

        cartCalc.append(priceText, totalText);
        orderedText.append(itemName, cartCalc);

        // Delete icon
        const deleteIconDiv = document.createElement("div");
        deleteIconDiv.className = "delete-icon";

        const deleteImg = document.createElement("img");
        deleteImg.src = "images/icon-delete.svg";
        deleteImg.alt = "Delete";

        deleteIconDiv.appendChild(deleteImg);

        // Final assembly
        orderedDiv.append(thumbImg, orderedText, deleteIconDiv);
        cartContent.appendChild(orderedDiv);

        // Checkout button
        const checkoutBtn = document.createElement("button");
        checkoutBtn.className = "btn btn-warning checkoutBtn";
        checkoutBtn.textContent = "Checkout";
        cartContent.appendChild(checkoutBtn);

        cartBadge.textContent = qty;
        cartBadge.style.display = "flex";


        // Delete icon eventListener
        deleteImg.addEventListener("click", () => {
            /*Give the delete icon some delay, let the click event resolve before updating the DOM, so it doesn't delete itself from the DOM, and close the cart dropdown.*/
            setTimeout(() => {
                emptyCart();
                resetQuantity();
            }, 10)

        });
    }

});

const resetQuantity = () => {
    quantity.textContent = 0;
    cartBadge.textContent = 0;
    cartBadge.style.display = "none";
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



