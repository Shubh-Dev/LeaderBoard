export const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/zRPcLNnykoeas7KKzkpU/scores';

export const mainDynamicBox = document.querySelector('.dynamic-box');

export const displayData =  async () => {
  const fetchData = await fetch(url).then((response) => response.json());
  fetchData.result.sort((a, b) => b.score - a.score);
  fetchData.result.forEach((item) => {
    const dynamicDiv = document.createElement('div');
    dynamicDiv.className = 'dynamic-div';
    dynamicDiv.innerHTML = `${item.user} : ${item.score}`;
    mainDynamicBox.appendChild(dynamicDiv);
    mainDynamicBox.style.display = 'block';
  });
}
