export class PortfolioItem {
  constructor(public photoUrl: string, public title: string, public githubUrl: string, public appUrl: string) {}
}

export function createPortfolioItem(portfolioItem: PortfolioItem) {
  return `
  <img src="${portfolioItem.photoUrl}" alt="${portfolioItem.title}" class="lazy"/>
  <a href="${portfolioItem.appUrl}" class="portfolio-title">
    <h3>${portfolioItem.title}</h3>
  </a>
  <div class="links">
    <a href="${portfolioItem.githubUrl}" class="link-btn">View Code</a>
    <a href="${portfolioItem.appUrl}" class="link-btn">View App</a>
  </div>
  `;
}
