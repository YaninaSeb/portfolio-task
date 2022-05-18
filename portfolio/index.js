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
