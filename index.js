import { menuArray } from "./fooddata.js";
const menuSection = document.getElementById("menu-section");
const yourOrder = document.getElementById("your-order");
let array = [];
let totalPrice = document.getElementById("total-price");
const orderButton = document.getElementById("order");

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
  orderButton.disabled = false;
  let targetchaiObj = menuArray.filter(function (chai) {
    return chai.id === targetchai;
  });
  targetchaiObj = targetchaiObj[0];
  pushvaluetoarray(targetchaiObj);
}

function pushvaluetoarray(value) {
  array.push(value);
  console.log(array);
  renderorderdetail();
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
// * this function will only work when renderorderdetail is called

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

//* 4
// *```````````````````````````````````````````````````````````````````````````````
function removeitemsfromcart() {
  yourOrder.addEventListener("click", function (e) {
    console.log(e.target.dataset.remove);
    if (e.target.dataset.remove) {
      splicefunction(e.target.dataset.remove);
    }
  });
}
removeitemsfromcart();
function splicefunction(targetremovevalue) {
  const index = array.indexOf(targetremovevalue - 1);
  array.splice(index, 1);
  renderorderdetail();
}

// *5
//* this will happen when order button is clicked order button

function orderButtonisclicked() {
  orderButton.addEventListener("click", function () {
    let customerDetail = document.getElementById("customer-detail");
    customerDetail.innerHTML = `<div class="customer-detail">
                                  <div>
                                  <p>Enter card detail</p>
                                  </div>
                                  <div>
                                  <input type="text" placeholder="Enter your name" />
                                  </div>
                                  <div><input type="number" placeholder="Enter card number" /></div>
                                  <div>
                                  <input type="number" placeholder="Enter CVC" />
                                  </div>
                                  <div>
                                  <button type="submit">pay</button>
                                </div>`;
  });
  // customerDetail.style.display = "block";
}
orderButtonisclicked();
