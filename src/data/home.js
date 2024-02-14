import bannerBg from "/banner-bg.png";
import product1 from "/product1.png";
import product2 from "/product2.png";
import product3 from "/product3.png";
import product4 from "/product4.png";
import product5 from "/product5.png";
import product6 from "/product6.png";
import product7 from "/product7.png";
import product8 from "/product8.png";

export const headerList = [
  {
    name: "О ресноте",
    path: "/",
  },
  {
    name: "Каталог",
    path: "/katalog",
  },
  {
    name: "Наши",
    path: "/nash",
  },
  {
    name: "Контакты",
    path: "/contacts",
  },
]

export const bannerData = [
  {
    img: bannerBg,
    title: "Истина в качестве",
    text: `КОМПАНИЯ «РЕСНОТА» ПРОИЗВОДИТ БОЛЕЕ 100 ВИДОВ ПРОДУКТОВ ПИТАНИЯ:
    КОЛБАСНЫЕ И МЯСНЫЕ ИЗДЕЛИЯ,
    ХЛЕБНАЯ И МОЛОЧНАЯ ПРОДУКЦИЯ`,
    button: "Купить",
  }
];

export const products = [ 
  {
    title: "Колбасные и мясные изделия",
    text: "Цена от 150 ₽ 56 товаров",
    img: product1,
  },
  {
    title: "Молочные продукты",
    text: "Сыры, Десерты, Йогурты, Кисломолочная продукция, Молоко, Сметана, Творог, Творожная масса",
    img: product2,
  },
  {
    title: "Морепродукты",
    text: "Рыба, Икра, Креветки",
    img: product3,
  },
  {
    title: "Пиво",
    text: "Крафтовое пиво",
    img: product4,
  },
  {
    title: "Замороженные продукты",
    text: "Замороженные овощи, Замороженные фркуты",
    img: product5,
  },
  {
    title: "Мёд",
    text: "Мед горный 0,25 кг, Мед с облепихой 0,25 кг, Мед с черникой 0,25 кг, Мед с разнотравья 0,25 кг, Мед цветочный 0,25 кг",
    img: product6,
  },
  {
    title: "Свежие овощи",
    text: "Картофель, Огурцы, Помидоры",
    img: product7,
  },
  {
    title: "Свежие фрукты",
    text: "Сезонные яблоки",
    img: product8,
  }
];
