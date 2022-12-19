import BasePage from './page';


/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends BasePage {

    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#sf-user-login');
    }

    get inputPassword () {
        return $('#sf-user-pass');
    }

    get btnSubmit () {
        return $('.submit-button');
    }

    get rememberUsernameTxt() {
        return $('.rememberme');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await expect(this.btnSubmit).toBeEnabled();
        await expect(await this.inputUsername.getValue()).toEqual('test_rep1');
        await expect(await this.inputPassword.getValue()).toEqual('650NotreDameOuest');
        await expect(this.rememberUsernameTxt).toBePresent();
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

export default new LoginPage();
