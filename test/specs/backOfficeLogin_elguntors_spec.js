import LoginPage from "../pageobjects/login.page";
import BackOfficePage from "../pageobjects/backoffice.page";
import RetailerList from "../pageobjects/retailer-list";


describe('backOffice validation', () => {

    it('BackOffice login elguntors page', async () =>  {
    // open the backOfficePage page
    await BackOfficePage.openBackOfficePage(RetailerList.elguntors);
    await expect(browser).toHaveUrlContaining("https://" + RetailerList.elguntors + "-qa05.salesfloor.net");
    await browser.pause(5000);

})
    it('Retailer login with valid credentials', async () => {
        await LoginPage.login('test_rep1', '650NotreDameOuest')
    })
})
