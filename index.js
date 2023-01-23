import { menuArray } from "./fooddata.js";
const menuSection = document.getElementById("menu-section");
const yourOrder = document.getElementById("your-order");
let array = [];
const lastelementofarray = [];

function taregetdatasetofchai() {
  menuSection.addEventListener("click", function (e) {
    if (e.target.dataset.add) {
      handleLikeClick(e.target.dataset.add);
    }
  });
}
taregetdatasetofchai();

function handleLikeClick(targetchai) {
  let targetchaiObj = menuArray.filter(function (chai) {
    return chai.id === targetchai;
  });
  targetchaiObj = targetchaiObj[0];
  pushvaluetoarray(targetchaiObj);
  console.log(array);
}

function pushvaluetoarray(value) {
  array.push(value);
}

function lastobjectarrayfunction() {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i - 1]);
  }
}
lastobjectarrayfunction();

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
