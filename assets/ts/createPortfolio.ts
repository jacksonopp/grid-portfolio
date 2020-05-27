import { PortfolioItem, createPortfolioItem } from './portfolioItem';
const portfolioDiv = document.getElementById('portfolio-container');

const portfolio = [
  new PortfolioItem('/img/gifTastic.png', 'GifTastic', '#', '#'),
  new PortfolioItem('/img/newsScrape.png', 'News Scraper', '#', '#'),
  new PortfolioItem('/img/nytSearch.png', 'NYT Search', '#', '#'),
  new PortfolioItem('/img/rlgl.png', 'Red Light Green Light', '#', '#'),
  new PortfolioItem('/img/shyband.png', 'Shy Band', '#', '#'),
];

export function createPortfolio() {
  portfolio.forEach((item) => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('portfolio-item');
    itemDiv.innerHTML = createPortfolioItem(item);
    portfolioDiv.append(itemDiv);
  });
}
