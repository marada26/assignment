import StorefrontPage from "../pageobjects/storefront.page";

describe('storefront validation', () => {
  it('185800 validate critical ements on Storefront page', async () =>  {
    // allure command

    // open the storefront page
    await StorefrontPage.openStorefrontPage('chicos');
    await expect(browser).toHaveUrlContaining(`https://chicos-qa05.salesfloor.net`)
    await expect(StorefrontPage.retailerTitle).toBePresent()

    // checking new arrive section displayed
    await browser.pause(4000)
    let Newarrival = $('#storefront-section-productgrid-new-arrivals-title')
    Newarrival.scrollIntoView();
    await browser.pause(4000)
    await expect(StorefrontPage.newArrival).toBePresent()

    await browser.pause(5000)
    // check if Top Pick products section is displayed
    let TopPicks = $('#storefront-section-productgrid-top-picks-title')
    TopPicks.scrollIntoView();
    await expect(StorefrontPage.topPicks).toBePresent()

    await browser.pause(5000)

    await StorefrontPage.search.click()

    // Search for jeans
    await StorefrontPage.searchTextField.setValue('jeans')

    await StorefrontPage.goButton.click()

    await expect(StorefrontPage.searchResultsJeans).toBePresent()
    
  })
})