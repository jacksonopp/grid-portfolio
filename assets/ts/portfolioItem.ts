`
`;

export class PortfolioItem {
  constructor(public photoUrl: string, public title: string, public githubUrl: string, public appUrl: string) {}
}

export function createPortfolioItem(portfolioItem: PortfolioItem) {
  return `
  <img src="${portfolioItem.photoUrl}" alt="${portfolioItem.title}" />
  <h4>${portfolioItem.title}</h4>
  <div class="links">
    <a href="${portfolioItem.githubUrl}" class="link-btn">Github Code</a>
    <a href="${portfolioItem.appUrl}" class="link-btn">View App</a>
  </div>
  `;
}
