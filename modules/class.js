const addBtn = document.querySelector('.submit-btn');
const nameValue = document.querySelector('.name-holder');
const scoreValue = document.querySelector('.score-holder');
const mainDynamicBox = document.querySelector('.dynamic-box');

export function addDetails() {
    addBtn.addEventListener('click', () => {
      const dynamicDiv = document.createElement('div');
      dynamicDiv.className = 'dynamic-div';
      dynamicDiv.innerHTML = `${nameValue.value}:${scoreValue.value}`;
      mainDynamicBox.appendChild(dynamicDiv);
      mainDynamicBox.style.display = 'block';
    });
    };



