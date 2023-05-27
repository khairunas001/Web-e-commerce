const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Logitech G Pro X Superlight",
    price: 2099000,
    colors: [
      {
        code: "#DB2C62",
        img: "img/gpxsMagenta.png",
      },
      {
        code: "black",
        img: "img/gpxsblack.png",
      },
    ],
  },
  {
    id: 2,
    title: "Fantech Helios XD3V2",
    price: 649000,
    colors: [
      {
        code: "#D49CA6",
        img: "img/xd3v2pink.png",
      },
      {
        code: "black",
        img: "img/xd3v2black.png",
      },
    ],
  },
  {
    id: 3,
    title: "Logitech G 304 Lightspeed",
    price: 599000,
    colors: [
      {
        code: "white",
        img: "img/g304white.png",
      },
      {
        code: "black",
        img: "img/g304black.png",
      },
    ],
  },
  {
    id: 4,
    title: "Pulsar Xlite",
    price: 1099000,
    colors: [
      {
        code: "red",
        img: "img/pulsar.png",
      },
      {
        code: "black",
        img: "img/pulsarblack2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Razer Deathadder Essential",
    price: 649000,
    colors: [
      {
        code: "white",
        img: "img/razerwhite.png",
      },
      {
        code: "black",
        img: "img/razerblack.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "Rp" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
