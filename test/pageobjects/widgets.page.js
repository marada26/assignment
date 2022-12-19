import BasePage from './page.js';

class WidgetsPage extends BasePage {


    get contactMe() {
        return $('li.footer__action.footer__action__question > a');
    }

    get iframeLocator() {
        return $('sf-footer-companion');
    }

    get sidebarText() {
        return $('h2:nth-child(1)');
    }

    get nameField() {
        return $('#name');
    }


  // open widgets page
async openWidgetsPage(retailer) {
    await this.open(`https://${retailer}-qa05.salesfloor.net/tests/desktop?lang=en&sf_rep=test_rep1`);
    
}


}

export default new WidgetsPage();