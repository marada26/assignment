import BasePage from './page.js';

class BackOfficePage extends BasePage {

// get retailerTitle() { return $('img[alt=\"Chico\'s\"]'); }



  // open backoffice page
async openBackOfficePage(retailer) {
    await this.open(`https://${retailer}-qa05.salesfloor.net/login`);
    
}

async openBackOfficeWidgetsPage(retailer) {
  await this.open('https://${retailer}-qa05.salesfloor.net/tests/desktop?lang=en&sf_rep=test_rep1');
}



}

export default new BackOfficePage();