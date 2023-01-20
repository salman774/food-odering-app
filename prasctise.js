import { menuArray } from "./fooddata.js";
const menuSection = document.getElementById("menu-section");

function taregetobjectofchai() {
  menuSection.addEventListener("click", function (e) {
    if (e.target.dataset.add) {
      handleLikeClick(e.target.dataset.add);
    }
  });
}
function handleLikeClick(menuid) {
  const targetTweetObj = menuArray.filter(function (tweet) {
    return tweet.id === menuid;
  });
  let array = [];
  array.push(menuid);
  console.log(targetTweetObj);
}

handleLikeClick();

taregetobjectofchai();

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
