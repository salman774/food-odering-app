import { v4 as uuidv4 } from "https://jspm.dev/uuid";

export const menuArray = [
  {
    name: "karak-chai",
    ingredients: [
      " Made with a blend of fermented black tea leaves ginger and spices black pepper cardamon, cinnamon, fennel and cloves.The above info just went to uk for higher studies ",
    ],
    id: `karak-chai`,
    price: 300,
    Image: "images/karakchai -PhotoRoom.png-PhotoRoom.png",
    uuid: uuidv4(),
  },
  {
    name: "kashmiri-chai",
    ingredients: [
      "Baking soda, which neutralizes the acid in the tea leaves and transforms the otherwise pale green tea into a deep burgundy color----Lol there is nothing like this in it",
    ],
    id: `kashmiri`,
    price: 500,
    Image: "images/kashmiri-pink-chai-1-featured-PhotoRoom.png-PhotoRoom.png",
    uuid: uuidv4(),
  },
  {
    name: "everyday-chai",
    ingredients: [
      `Just making you stupid 'every-day' is such a scam we are just adding water in every-day and selling it to you for freaking 100 rs lol  `,
    ],
    id: `everyday`,
    price: 150,
    Image: "images/everday.jpeg",
    uuid: uuidv4(),
  },
];
