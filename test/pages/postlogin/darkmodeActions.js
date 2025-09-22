const darkmodeLocators= require('./darkmodeLocators');

class DarkModeActions {
    async clickOnDarkModeButton() {
        await darkmodeLocators.darkModeButton.click();
    }
    async clickOnOnButton() {
        await darkmodeLocators.onButton.click();
    }
}
module.exports = new DarkModeActions();