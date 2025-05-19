

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



menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});