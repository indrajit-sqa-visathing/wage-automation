const logoutLocators= require('./logoutLocators');

class LogoutActions {
    async clickOnLogoutButton() {
        await logoutLocators.logoutButton.click();
    }
    async clickOnLogoutConfirmation() {
        await logoutLocators.logoutConfirmation.click();
    }
}
module.exports = new LogoutActions();