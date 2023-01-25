import { menuArray } from "./fooddata.js";
const menuSection = document.getElementById("menu-section");
const yourOrder = document.getElementById("your-order");
let array = [];
let totalPrice = document.getElementById("total-price");
let orderDetail = document.getElementsByClassName("order-detail");

//* 1
function renderMenu() {
  let fullmenu = "";
  menuArray.forEach(function (menu) {
    fullmenu += ` <div class="menu">
      <div>
        <img src="${menu.Image}" alt="" />
      </div>
      <div class="chai-information">
        <p>${menu.name}</p>
        <hr />
        <p>${menu.ingredients}
        </p>
        <hr />
        <p>${menu.price} Rupess</p>
        <hr />
      </div >
      <button class="add-to-order" data-add="${menu.id}">+</button>
    </div>
  `;
  });
  menuSection.innerHTML = fullmenu;
}
renderMenu();

//* 2
function taregetdatasetofchai() {
  menuSection.addEventListener("click", function (e) {
    if (e.target.dataset.add) {
      handleLikeClick(e.target.dataset.add);
    }
  });
}
taregetdatasetofchai();

//* this function will only run when the added button is clicked

function handleLikeClick(targetchai) {
  let targetchaiObj = menuArray.filter(function (chai) {
    return chai.id === targetchai;
  });
  targetchaiObj = targetchaiObj[0];
  pushvaluetoarray(targetchaiObj);
}

function pushvaluetoarray(value) {
  array.push(value);
  renderorderdetail();
  console.log(array);
}

//* 3 -----------------------------------------------------------------------

function renderorderdetail() {
  let value = 0;
  let order = "";
  array.forEach(function (renderorder) {
    value += 1;
    order += `
  <div class="order-detail">
    <p>${renderorder.name}</p>
   <button data-remove="${value}" type="reset">remove</button>
   <p>${renderorder.price} RS. </p>
  </div>
  <hr/>`;
  });
  yourOrder.innerHTML = order;
  totalpriceefunction();
}

function totalpriceefunction() {
  let price = "";
  let result = array.map(function (price) {
    return price.price;
  });
  let sum = 0;
  for (let i = 0; i < result.length; i++) {
    sum += result[i];
  }
  price += ` 
        <p>Total-price:</p>
        <p>${sum} rupees</p>
      </div>`;
  totalPrice.innerHTML = price;
}

function removeitemsfromcart() {
  yourOrder.addEventListener("click", function (e) {
    console.log(e.target.dataset.remove);
  });
}
removeitemsfromcart();
