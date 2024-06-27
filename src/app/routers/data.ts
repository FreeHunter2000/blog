import {userbewertung} from "../warenkorb/userBewertung.model";
import {Produkt} from "../produkt/produkt.model";

export const sample_foods: any[] = [
  {
    id: '0',
    name: 'TestName',
    description: 'This is just a Description',
    price: 1,
    imageUrl: 'https://cdn.stocksnap.io/img-thumbs/960w/food-recipe_G8QICMKLUV.jpg',
    ratings: 12,
    // Weitere Eigenschaften hier einfügen, falls vorhanden
  },
  {
    id: '1',
    name: 'Jacke',
    description: 'This is just a Description',
    price: 15,
    imageUrl: 'https://cdn.stocksnap.io/img-thumbs/960w/food-recipe_G8QICMKLUV.jpg',
    ratings: 16,
    // Weitere Eigenschaften hier einfügen, falls vorhanden
  },
  {
    id: '2',
    name: 'Hemd',
    description: 'This is just a Description',
    price: 20,
    imageUrl: 'https://cdn.stocksnap.io/img-thumbs/960w/food-recipe_G8QICMKLUV.jpg',
    ratings: 20,
    // Weitere Eigenschaften hier einfügen, falls vorhanden
  },
  {
    id: '3',
    name: 'Hose',
    description: 'This is just a Description',
    price: 35,
    imageUrl: 'https://cdn.stocksnap.io/img-thumbs/960w/food-recipe_G8QICMKLUV.jpg',
    ratings: 24,
    // Weitere Eigenschaften hier einfügen, falls vorhanden
  },
  {
    id: '4',
    name: 'Schuhe',
    description: 'This is just a Description',
    price: 40,
    imageUrl: 'https://cdn.stocksnap.io/img-thumbs/960w/food-recipe_G8QICMKLUV.jpg',
    ratings: 24,
    // Weitere Eigenschaften hier einfügen, falls vorhanden
  },
];

export const sample_tags: any[] = [
  { name: 'All', count: 6 },
  { name: 'FastFood', count: 4 },
  { name: 'Pizza', count: 2 },
  { name: 'Lunch', count: 3 },
  { name: 'SlowFood', count: 2 },
  { name: 'Hamburger', count: 1 },
  { name: 'Fry', count: 1 },
  { name: 'Soup', count: 1 },
];

export const sample_users: any[] = [
  {
    name: 'Doe',
    email: 'john@gmail.com',
    password: '12345',
    isAdmin: true,
    vorname: 'John',
    eigeneBwertungen: [],
    eigeneKaeufe: [],
    loggedIn: true,
    warenkorb: [],
  },
  {
    name: 'Die',
    email: 'jana@gmail.com',
    password: '12345',
    isAdmin: false,
    vorname: 'jana',
    eigeneBwertungen: [],
    eigeneKaeufe: [],
    loggedIn: true,
    warenkorb: [],
  },
];
