const menuItems = [
  {
    id: 1,
    title: "strawberry pancake",
    category: "breakfast",
    price: 15.99,
    img: "https://images.unsplash.com/photo-1565299543923-37dd37887442?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=481&q=80",
    desc: `loaded with strawberry rich taste`,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "https://images.unsplash.com/photo-1502998070258-dc1338445ac2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=379&q=80",
    desc: `loaded cheese  `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "milkshakes",
    price: 6.99,
    img: "https://images.unsplash.com/photo-1594488506255-a8bbfdeedbaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    desc: `loaded with chocolate `,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "https://images.unsplash.com/photo-1501959915551-4e8d30928317?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    desc: `loaded with cheese and rich in protein`,
  },
  {
    id: 5,
    title: "egg attack",
    category: "breakfast",
    price: 22.99,
    img: "https://images.unsplash.com/photo-1513442542250-854d436a73f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=647&q=80",
    desc: `loaded with egg `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "milkshakes",
    price: 18.99,
    img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    desc: `loaded chocolate oreo drem shake with rich chocolate`,
  },
  {
    id: 7,
    title: "egg roll",
    category: "sides",
    price: 8.99,
    img: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1010&q=80",
    desc: `loaded egg roll `,
  },
  {
    id: 8,
    title: "american classic kebab",
    category: "lunch",
    price: 12.99,
    img: "https://images.unsplash.com/photo-1600555379765-f82335a7b1b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    desc: `non veg loaded   `,
  },
  {
    id: 9,
    title: "pasta",
    category: "lunch",
    price: 19.09,
    img: "https://images.unsplash.com/photo-1597393353365-9d4366392fe9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    desc: `loaded with cheese`,
  },

  {
    id: 10,
    title: "egg puffs",
    category: "sides",
    price: 9.39,
    img: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    desc: `crispy and laoded with egg`,
  },
  {
    id: 11,
    title: "fruit pancake",
    category: "breakfast",
    price: 14.79,
    img: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    desc: `rich in fruits `,
  },
  {
    id: 12,
    title: "fish curry",
    category: "lunch",
    price: 23.39,
    img: "https://images.unsplash.com/photo-1577303935007-0d306ee638cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1140&q=80",
    desc: `non veg fish curry`,
  },
  {
    id: 13,
    title: "fruits Loaded",
    category: "milkshakes",
    price: 13.39,
    img: "https://images.unsplash.com/photo-1600718374662-0483d2b9da44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80",
    desc: `fully loaded rich in fruits milkshake`,
  },
];

const buttonContainer = document.querySelector(".button-container");
const menusContainer = document.querySelector(".menus-container");

console.log(buttonContainer, menusContainer);

window.addEventListener("DOMContentLoaded", () => {
  showDishes(menuItems);
  displayCategory();
});

const showDishes = (menus) => {
  let display = menus.map((dish) => {
    return `<div class="menu">
    <img
        src=${dish.img}>
    <div class="pricing-container">
        <h5>${dish.title}</h5>
        <h4 class="pricing">${dish.price}$</h4>
    </div>
    <p>${dish.desc}
    </p>

</div>
</div>`;
  });

  menusContainer.innerHTML = display.join("");
};

const displayCategory = () => {
  let categoryArr = [];
  const categories = menuItems.forEach((cat) => {
    categoryArr.push(cat.category);
  });
  // console.log(categoryArr);
  let finalCategory = ["all", ...new Set(categoryArr)];

  let categoryTree = finalCategory.map((cat) => {
    return ` <button class="btn" data-value=${cat}>${cat}</button>`;
  });
  buttonContainer.innerHTML = categoryTree.join("");
  let allButtons = document.querySelectorAll(".btn");
  // console.log(allButtons);
  allButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const clickedCategory = e.currentTarget.dataset.value;
      console.log(clickedCategory);

      const filteredDishes = menuItems.filter(
        (cat) => cat.category === clickedCategory
      );

      console.log(filteredDishes);

      if (clickedCategory === "all") {
        showDishes(menuItems);
      } else {
        showDishes(filteredDishes);
      }
    });
  });
};
