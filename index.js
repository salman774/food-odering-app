import { menuArray } from "./fooddata.js";
const menuSection = document.getElementById("menu-section");
const yourOrder = document.getElementById("your-order");
let array = [];

function taregetdatasetofchai() {
  menuSection.addEventListener("click", function (e) {
    if (e.target.dataset.add) {
      handleLikeClick(e.target.dataset.add);
    }
  });
}
taregetdatasetofchai();

function handleLikeClick(targetchai) {
  const targetchaiObj = menuArray.filter(function (chai) {
    return chai.id === targetchai;
  })[0];
  // const realTargetTweetObject = targetTweetObj[0]
  pushvaluetoarray(targetchaiObj);
}

handleLikeClick();

function pushvaluetoarray(value) {
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
      <button class="add-to-order" data-add="${menu.id}">+</button>
    </div>
  `;
  });
  menuSection.innerHTML = fullmenu;
}
renderMenu();
