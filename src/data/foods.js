// Import only existing images from img folder
import food2Cold from '../../img/food2-cold.png'
import food3Cold from '../../img/food3-cold.png'
import food4Cold from '../../img/food4-cold.png'

import food1Hot from '../../img/food1-hot.png'
import food2Hot from '../../img/food2-hot.png'
import food3Hot from '../../img/food3-hot.png'
import food4Hot from '../../img/food4-hot.png'

import food1Meat from '../../img/food1-meat.png'
import food2Meat from '../../img/food2-meat.png'
import food3Meat from '../../img/food3-meat.png'
import food4Meat from '../../img/food4-meat.png'

import foot1Cold from '../../img/foot1-cold.png'

export default [
  // Cold Starters (using available cold images)
  {
    id: '1',
    name: 'Lamb',
    description: 'Stuffed with buckwheat porridge, dried apricots, orange and green apple',
    img: food2Cold,
    weight: 225,
    price: 13,
    category: 'cold'
  },
  {
    id: '2',
    name: 'Turkey bird',
    description: 'Stuffed with buckwheat porridge, dried apricots, orange and green apple',
    img: food2Cold,
    weight: 150,
    price: 16,
    category: 'cold'
  },
  {
    id: '3',
    name: 'Goose',
    description: 'Stuffed with apples',
    img: food3Cold,
    weight: 200,
    price: 5,
    category: 'cold'
  },
  {
    id: '4',
    name: 'Duck',
    description: 'Stuffed with rice, dried apricots and quince',
    img: food4Cold,
    weight: 180,
    price: 8,
    category: 'cold'
  },

  {
    id: "cold-1",
    category: "Cold Starters",
    name: "Salad",
    img: food2Cold,
    desc: "Fresh vegetables with a light dressing",
    weight: 150,
    price: 14
  },
  {
    id: "cold-2",
    category: "Cold Starters",
    name: "Goose",
    img: food3Cold,
    desc: "Stuffed with apples",
    weight: 225,
    price: 5
  },
  {
    id: "cold-4",
    category: "Cold Starters",
    name: "Soup",
    img: food4Cold,
    desc: "Rich tomato-based soup",
    weight: 180,
    price: 10
  },

  // Hot Starters
  {
    id: "hot-1",
    category: "Hot Starters",
    name: "Goose",
    img: food3Hot,
    desc: "Stuffed with buckwheat porridge, dried apricots, orange and green apple",
    weight: 225,
    price: 5
  },
  {
    id: "hot-2",
    category: "Hot Starters",
    name: "Duck",
    img: food4Hot,
    desc: "Fresh vegetables with a light dressing",
    weight: 150,
    price: 8
  },
  {
    id: "hot-3",
    category: "Hot Starters",
    name: "Lamb",
    img: food1Hot,
    desc: "Stuffed with buckwheat porridge, dried apricots, orange and green apple",
    weight: 225,
    price: 13
  },
  {
    id: "hot-4",
    category: "Hot Starters",
    name: "Turkey bird",
    img: food2Hot,
    desc: "Fresh vegetables with a light dressing",
    weight: 150,
    price: 16
  },
  {
    id: "hot-5",
    category: "Hot Starters",
    name: "Duck",
    img: food4Hot,
    desc: "Fresh vegetables with a light dressing",
    weight: 150,
    price: 8
  },
  {
    id: "hot-6",
    category: "Hot Starters",
    name: "Lamb",
    img: food1Hot,
    desc: "Fresh vegetables with a light dressing",
    weight: 150,
    price: 13
  },

  // Meat Dishes (using meat images)
  {
    id: 'meat-1',
    category: 'Meat Dishes',
    name: 'Lamb',
    description: 'Stuffed with buckwheat porridge, dried apricots, orange and green apple',
    img: food1Meat,
    weight: 225,
    price: 13,
  },
  {
    id: 'meat-2',
    category: 'Meat Dishes',
    name: 'Turkey bird',
    description: 'Stuffed with buckwheat porridge, dried apricots, orange and green apple',
    img: food2Meat,
    weight: 150,
    price: 16,
  },
  {
    id: 'meat-3',
    category: 'Meat Dishes',
    name: 'Goose',
    description: 'Stuffed with apples',
    img: food3Meat,
    weight: 200,
    price: 5,
  },
  {
    id: 'meat-4',
    category: 'Meat Dishes',
    name: 'Duck',
    description: 'Stuffed with rice, dried apricots and quince',
    img: food4Meat,
    weight: 180,
    price: 8,
  },
  {
    id: "meat-5",
    category: "Meat Dishes",
    name: "Salad",
    img: food2Meat,
    desc: "Fresh vegetables with a light dressing",
    weight: 150,
    price: 14
  },
  {
    id: "meat-6",
    category: "Meat Dishes",
    name: "Goose",
    img: food3Meat,
    desc: "Stuffed with apples",
    weight: 225,
    price: 5
  },

  // example additional dish with fallback image
  {
    id: "extra-1",
    category: "Extras",
    name: "Sample",
    img: foot1Cold,
    desc: "Placeholder item",
    weight: 100,
    price: 4
  }
];