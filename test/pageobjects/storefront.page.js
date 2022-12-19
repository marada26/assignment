import BasePage from './page.js';

class StorefrontPage extends BasePage {

  get retailerTitle() { return $('img[alt=\"Chico\'s\"]'); }

  get topPicks() {return $('#storefront-section-productgrid-top-picks-title')}

  get newArrival() { return $('#storefront-section-productgrid-new-arrivals-title')}

  get search() {return $('nav>div>a.js-storefront-search-btn')}

  get searchTextField() {return $('#searchInput')}

  get goButton() {return $('div.storefront-header__form__button-ctn > button')}

  get searchResultsJeans() {return $('.search-term')}
  
  // open storefront page
  async openStorefrontPage(retailer) {
    await this.open(`https://${retailer}-qa05.salesfloor.net/test_rep1`)
    // await expect(browser).toHaveUrlContaining("storefront-section-productgrid-new-arrivals-title")
  }
}
export default new StorefrontPage();