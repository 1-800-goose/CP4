/**
 * Name: Robin Luo
 * Date: November 17, 2021
 * Section: CSE 154 AB
 * This is the app.js file for my friend generator site. It is the API that provides data for my
 * site. It primarily contains photo paths + alt text for my stuffed animal images.
 */
'use strict';

const express = require('express');
const app = express();

/**
 * photo sources:
 * bear: https://shop.san-x.co.jp/product/detail/RLK8922
 * wizard: https://shop.san-x.co.jp/product/detail/SMG3987
 * father: https://shop.san-x.co.jp/product/detail/RLK8890
 * pumpkin: https://shop.san-x.co.jp/product/detail/SMG3894
 * halloween: https://shop.san-x.co.jp/product/detail/RLK8861
 * strawberry: https://shop.san-x.co.jp/product/detail/RLK8836
 * dinosaur: https://shop.san-x.co.jp/product/detail/RLK8091
 * pudding: https://shop.san-x.co.jp/product/detail/SMG4042
 */
let bears = [
  {
    "image": "img/bear.png",
    "alt": "a stuffed beige bear"
  },
  {
    "image": "img/father.png",
    "alt": "a stuffed brown bear"
  },
  {
    "image": "img/halloween.png",
    "alt": "a stuffed vampire bear"
  },
  {
    "image": "img/strawberry.png",
    "alt": "a stuffed strawberry bear"
  }
];

let birds = [
  {
    "image": "img/dinosaur.png",
    "alt": "a stuffed chicken"
  },
  {
    "image": "img/wizard.png",
    "alt": "a stuffed wizard"
  }
];

let etc = [
  {
    "image": "img/pumpkin.png",
    "alt": "a stuffed pumpkin"
  },
  {
    "image": "img/pudding.png",
    "alt": "a stuffed pudding"
  }
];

app.get('/friend/:category', function(req, res) {
  let param = req.params['category'];
  if (param === 'bears' || param === 'birds' || param === 'etc') {
    res.json(getFriend(param));
  } else {
    res.status(400).json({'error': 'no friends of type ' + req.params['category'] + " available!"});
  }
});

/**
 * this function gets a random stuffed animal from the json variables depending on the specified
 * category
 * @param {object} category - either bears, birds, or etc
 * @returns {object} - a random stuffed animal with image and alt information
 */
function getFriend(category) {
  let number = 0;
  if (category === 'bears') {
    number = bears.length;
    return bears[Math.floor(Math.random() * number)];
  } else if (category === "birds") {
    number = birds.length;
    return birds[Math.floor(Math.random() * number)];
  } else {
    number = etc.length;
    return etc[Math.floor(Math.random() * number)];
  }
}

app.use(express.static('public'));
const PORT = process.env.PORT || 8000;
app.listen(PORT);