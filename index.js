import { menuArray } from "./fooddata.js";
const menuSection = document.getElementById("menu-section");
let array = [];

function taregetobjectofchai() {
  menuSection.addEventListener("click", function (e) {
    if (e.target.dataset.add) {
      handleLikeClick(e.target.dataset.add);
    }
  });
}
taregetobjectofchai();

function handleLikeClick(targetchai) {
  const targetchaiObj = menuArray.filter(function (chai) {
    return chai.id === targetchai;
  });
  targetedobject(targetchaiObj);
}

handleLikeClick();

function targetedobject(value) {
  array.push(value);
  console.log(array);
}

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
      <button class="add-to-order"  data-add="${menu.id}">+</button>
    </div>
  `;
  });
  menuSection.innerHTML = fullmenu;
}
renderMenu();
