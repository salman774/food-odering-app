import { menuArray } from "./fooddata.js";
const menuSection = document.getElementById("menu-section");

function taregetobjectofchai() {
  menuSection.addEventListener("click", function (e) {
    let taregetid = e.target.id;
    console.log(taregetid);
    return taregetid;
  });
}
taregetobjectofchai();

// menuArray.forEach(function (show) {
//   let displayorder = "";

//   displayorder += `<div class="order-detail">
//     <p>${show.name}</p>
//     <button type="reset">remove</button>
//     <p>${show.price}</p>
//   </div>
//   <hr />
//   <div class="total-price">
//     <p>total-price</p>
//     <p>value</p>
//   </div>`;
// });

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
      <button id="${menu.id}" class="add-to-order">+</button>
    </div>
  `;
  });
  menuSection.innerHTML = fullmenu;
}
renderMenu();
