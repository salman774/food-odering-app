import { menuArray } from "./fooddata.js";
const menuSection = document.getElementById("menu-section");
const yourOrder = document.getElementById("your-order");
let array = [];
let totalPrice = document.getElementById("total-price");

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
  console.log(array);
  renderorderdetail();
}

function renderorderdetail() {
  let order = "";
  array.forEach(function (renderorder) {
    order += `
  <div class="order-detail">
    <p>${renderorder.name}</p>
   <button type="reset">remove</button>
   <p>${renderorder.price} RS. </p>
  </div>
  <hr/>`;
  });
  yourOrder.innerHTML = order;
  totalpriceefunction();
}

// function totalpriceefunction() {
//   let price = "";
//   array.forEach(function (priceofchai) {
//     price += ` <div id="total-price" class="total-price">
//     <p>total-price:</p>
//     <p>${priceofchai.price} </p>
//   </div>`;
//   });
//   totalPrice.innerHTML = price;
// }

function totalpriceefunction() {
  let price = "";
  let result = array.map(function (price) {
    return price.price;
  });
  let sum = 0;
  for (let i = 0; i < result.length; i++) {
    sum += result[i];
  }
  console.log(sum);
  price += ` 
        <p>Total-price:</p>
        <p>${sum} rupees</p>
      </div>`;
  totalPrice.innerHTML = price;
}
