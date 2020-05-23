import { PortfolioItem, createPortfolioItem } from './portfolioItem';
const portfolioDiv = document.getElementById('portfolio-container');

const portfolio = [
  new PortfolioItem('http://www.placekitten.com/800/300', 'title one', '#', '#'),
  new PortfolioItem('http://www.placekitten.com/800/300', 'title two', '#', '#'),
  new PortfolioItem('http://www.placekitten.com/800/300', 'title three', '#', '#'),
  new PortfolioItem('http://www.placekitten.com/800/300', 'title four', '#', '#'),
  new PortfolioItem('http://www.placekitten.com/800/300', 'title five', '#', '#'),
];

export function createPortfolio() {
  portfolio.forEach((item) => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('portfolio-item');
    itemDiv.innerHTML = createPortfolioItem(item);
    portfolioDiv.append(itemDiv);
  });
}
