import { menuArray } from "./fooddata.js";
const menuSection = document.getElementById("menu-section");
const yourOrder = document.getElementById("your-order");
let array = [];

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
        <p>${menu.price}</p>
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
   <p>${renderorder.price}</p>
  </div>
  <hr/>`;
  });
  yourOrder.innerHTML = order;
}
