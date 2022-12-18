const totalPriceTag = document.getElementById("total-price");
let totalPriceNumber = Number(totalPriceTag.textContent);

const burgerPrice = 10;
const burgersImages = document.getElementById("burgers");

const tomatoPrice = 2;
const tomatosImages = document.getElementById("tomatos");

const cheesePrice = 8;
const cheesesImages = document.getElementById("cheese");

document.getElementById("year").innerHTML = new Date().getFullYear();



function addBurger() {
  totalPriceNumber += burgerPrice;
  totalPriceTag.textContent = totalPriceNumber;
  const burgerImage = document.createElement("img");
  burgerImage.src = "./images/burger.png";
  burgerImage.alt = "burger";
  burgersImages.appendChild(burgerImage);
}

function removeBurger() {
  if (burgersImages.lastChild) {
    totalPriceNumber -= burgerPrice;
    totalPriceTag.textContent = totalPriceNumber;
    burgersImages.removeChild(burgersImages.lastChild);
  }
}

function addTomato() {
  totalPriceNumber += tomatoPrice;
  totalPriceTag.textContent = totalPriceNumber;
  const tomatoImage = document.createElement("img");
  tomatoImage.src = "./images/tomato.png";
  tomatoImage.alt = "tomato";
  tomatosImages.appendChild(tomatoImage);
}

function removeTomato() {
  if (tomatosImages.lastChild) {
    totalPriceNumber -= tomatoPrice;
    totalPriceTag.textContent = totalPriceNumber;
    tomatosImages.removeChild(tomatosImages.lastChild);
  }
}

function addCheese() {
  totalPriceNumber += cheesePrice;
  totalPriceTag.textContent = totalPriceNumber;
  const cheeseImage = document.createElement("img");
  cheeseImage.src = "./images/cheese.png";
  cheeseImage.alt = "cheese";
  cheesesImages.appendChild(cheeseImage);
}

function removeCheese() {
  if (cheesesImages.lastChild) {
    totalPriceNumber -= cheesePrice;
    totalPriceTag.textContent = totalPriceNumber;
    cheesesImages.removeChild(cheesesImages.lastChild);
  }
}

function clearAll() {
  burgersImages.innerHTML = "";
  tomatosImages.innerHTML = "";
  cheesesImages.innerHTML = "";
  totalPriceNumber = 5;
  totalPriceTag.textContent = totalPriceNumber;
}
