import './style.css';
import { displayData, url, mainDynamicBox } from '../modules/display.js';

const nameValue = document.querySelector('.name-holder');
const scoreValue = document.querySelector('.score-holder');
const addBtn = document.querySelector('.submit-btn');
const ourRefreshBtn = document.querySelector('.refresh-btn');

addBtn.addEventListener('click', () => {
  fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      user: nameValue.value,
      score: scoreValue.value,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.json());
});

ourRefreshBtn.addEventListener('click', () => {
  if (mainDynamicBox.innerHTML !== '') {
    mainDynamicBox.innerHTML = '';
    displayData();
  } else {
    displayData();
  }
});
