//get data
//create an li element using json data
// like
//
//  <li class="reaction"><p><img src="./assets/images/icon-reaction.svg" alt="reaction-image">Reaction</p>
//      <div class="marks">80 <span> /100</span></div></li>
const jsonDataPath = './data.json';
async function getData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error('Error fetching data!', err);
  }
}

async function populateHTML() {
  const scoreList = document.getElementById('scoreList');
  const jsonData = await getData(jsonDataPath);

  if (jsonData) {
    jsonData.forEach((item) => {
      const listitem = document.createElement('li');
      listitem.className = item.category.toLowercase;
      listitem.innerHTML = `<p><img src="${item.icon}" alt="${item.category}">${item.category}</p><div class="marks">${item.score} <span> /100</span></div>`;

      scoreList.appendChild(listitem);
    });
  }
}

populateHTML();
