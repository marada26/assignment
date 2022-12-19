import WidgetsPage from "../pageobjects/widgets.page";
import RetailerList from "../pageobjects/retailer-list";


describe('Footer Widget Validation', () => {

    it('Footer Widget Validation page url verification', async () =>  {
    // open the backOfficePage page
    await WidgetsPage.openWidgetsPage(RetailerList.chicoswidgets);
    await expect(browser).toHaveUrlContaining("https://" + RetailerList.chicoswidgets + "-qa05.salesfloor.net/tests/desktop?lang=en&sf_rep=test_rep1");
    await browser.pause(3000);

})
    it('Footers Page Widgets Validation', async () => {
        await browser.switchToFrame(1);
        await expect(WidgetsPage.contactMe).toBePresent();
        await browser.switchToParentFrame();
        await expect(await WidgetsPage.sidebarText.getText()).toContain('Links to sidebars');
        var parentWindowTitle = await browser.getTitle();
        var parentWindowHandle = await browser.getWindowHandle();
        console.log('parent window title' + parentWindowTitle)
        await browser.switchToFrame(1);
        await WidgetsPage.contactMe.click();
        await browser.switchToParentFrame();
        var newWindowTile = "Testy Rep0 Tester Rep0 | Chico's";
        await browser.switchWindow(newWindowTile);
        var titleOfWindow = await browser.getTitle();
        console.log('new window title' + titleOfWindow)
        await expect(titleOfWindow).toBe(newWindowTile);
        await $('#name').setValue('salesfloor');
        await browser.pause(5000);
        await browser.closeWindow();
        await browser.pause(5000);
        await  browser.switchToWindow(parentWindowHandle);
        var parentWindowTileNow = await browser.getTitle();
        await expect(parentWindowTitle).toBe(parentWindowTileNow);
    })
})