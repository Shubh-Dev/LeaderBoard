import { add } from 'lodash';
import './style.css';
// import addDetails from '../modules/class.js';
// addDetails();


// { 
// 	"user": "shubh",
// 	"score": 30
// }

// function fetchAndDisplay() {
//     const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/zRPcLNnykoeas7KKzkpU/scores/';

//     fetch(url + 'games', {method: 'POST', body: JSON.stringify({name: nameValue.value})})
//     .then((response) => {return response.text()}).then((data) => {
//        mainDynamicBox.innerHTML = data;
//        console.log(data);
//     });
// };

// addBtn.addEventListener('click', () => {
//     fetchAndDisplay();
// })

const ourRefreshBtn = document.querySelector('.refresh-btn');
const mainDynamicBox = document.querySelector('.dynamic-box');
const gameID = 'zRPcLNnykoeas7KKzkpU'
const addBtn = document.querySelector('.submit-btn');
// const mainDynamicBox = document.querySelector('.dynamic-box');
const nameValue = document.querySelector('.name-holder');
const scoreValue = document.querySelector('.score-holder');
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/zRPcLNnykoeas7KKzkpU/scores';


addBtn.addEventListener('click', () => {
    fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            user: nameValue.value,
            score: scoreValue.value
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    }).then((response) => response.json())
        .then((json) => console.log(json));
});

const getScores = async () => {
    const resp = await fetch(url).then((response) => response.json())
    // .then((data) => displayData(data.result));

    console.log("line53", resp)
    return resp;
};



async function displayData() {
    const fetchData = await fetch(url).then((response) => response.json());
    console.log("line61", fetchData.result)
    fetchData.result.forEach(item => {
        console.log("inside displaydata", item);
        const dynamicDiv = document.createElement('div');
        dynamicDiv.className = 'dynamic-div';
        dynamicDiv.innerHTML = ` ${item.user} : ${item.score}`;
        mainDynamicBox.appendChild(dynamicDiv);
        mainDynamicBox.style.display = 'block';

    })
};


ourRefreshBtn.addEventListener('click',() => {
    if(mainDynamicBox.innerHTML != '') {
        mainDynamicBox.innerHTML = '';
        displayData();
    } else {
        displayData();
    }
});



// addBtn.addEventListener('click', (e) => {
//     postToApi();
//     console.log('working');
//     e.preventDefault();
// })

