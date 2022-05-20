import i18Obj from './js/translate.js';


// CHANGE PHOTOS IN PORTFOLIO
const containerBtnsPortfolio = document.querySelector('.portfolio-btns');
const btnsPortfolio = document.querySelectorAll('.btn-season');
const itemsPortfolio = document.querySelector('.portfolio-items');

containerBtnsPortfolio.addEventListener('click', (e) => {
    let elem = e.target;
    let season = elem.dataset.season;

    btnsPortfolio.forEach((btn) => btn.classList.remove('btn-season_active'));
    elem.classList.add('btn-season_active');

    changeImgPortfolio(season);
});

function changeImgPortfolio(data) {
    itemsPortfolio.innerHTML = '';
    for (let i = 1; i < 7; i++) {
      itemsPortfolio.innerHTML += `<img src="./assets/img/${data}/${i}.jpg" alt="portfolio-img" class="portfolio-img">`;
    }
}
changeImgPortfolio('autumn');

// RIPPLE BUTTON
const btns = document.querySelectorAll('.btn'); 
btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {

      const x = e.pageX; //координаты точки клика
      const y = e.pageY;

      const buttonTop = e.target.offsetTop; //расстояние до вверха родителя
      const buttonLeft = e.target.offsetLeft; 

      const xInside = x - buttonLeft;
      const yInside = y - buttonTop;

      const circle = document.createElement('span');
      circle.classList.add('circle');
      circle.style.top = `${yInside}px`;
      circle.style.left = `${xInside}px`;

      btn.appendChild(circle);
      setTimeout(() => circle.remove(), 500);
    });
});

//CHANGE LANG
const btnsLang = document.querySelectorAll('.lang');
btnsLang.forEach((item) => {
  item.addEventListener('click', (e) => {
    changeClassActive(item);
    const lang = item.textContent;
    getTranslate(lang);
  });
});

function changeClassActive(elem) {
  btnsLang.forEach((item) => {
    item.classList.remove('lang_active');
  });
  elem.classList.add('lang_active');
}

function getTranslate(lang) {
  const allItems = document.querySelectorAll('[data-i18]');
  allItems.forEach((item) => {
    const itemValue = item.dataset.i18;

    if (item.placeholder) {
      item.placeholder = '';
      item.placeholder = i18Obj[`${lang}`][`${itemValue}`];
    } else {
      item.textContent = ''
      item.textContent = i18Obj[`${lang}`][`${itemValue}`];  
    }
  });
}
