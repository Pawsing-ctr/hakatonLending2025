import type { IMenuItem, IOffice } from "../types";

export const menuItems: IMenuItem[] = [
  {
    officeId: 1,
    items: [
      { id: 101, name: "Бизнес-ланч A", price: 400 },
      { id: 102, name: "Суп Дня", price: 180 },
      { id: 103, name: "Курица с рисом", price: 300 },
    ],
  },

  {
    officeId: 2,
    items: [
      { id: 201, name: "Вегетарианский набор", price: 450 },
      { id: 202, name: "Салат Греческий", price: 230 },
      { id: 203, name: "Паста с грибами", price: 350 },
      { id: 204, name: "Кофе", price: 100 },
    ],
  },

  {
    officeId: 3,
    items: [
      { id: 301, name: "Плов Узбекский", price: 380 },
      { id: 302, name: "Шашлык (порция)", price: 550 },
    ],
  },
];

export const officeList: IOffice[] = [
  { id: 1, name: "Офис 1" },
  { id: 2, name: "Офис 2" },
  { id: 3, name: "Офис 3" },
];
