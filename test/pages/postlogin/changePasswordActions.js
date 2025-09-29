const changePasswordLocators = require('./changePasswordLocators');

class ChangePasswordActions {
    async clickOnChangePasswordButton() {
        await changePasswordLocators.accountSettingsButton.click();
        await changePasswordLocators.changePassword.click();
    }

    async enterOldPassword(oldPassword) {
        await changePasswordLocators.oldPasswordField.setValue(oldPassword);
    }

    async enterNewPassword(newPassword) {
        await changePasswordLocators.newPasswordField.setValue(newPassword);
    }

    async enterConfirmPassword(confirmPassword) {
        await changePasswordLocators.confirmPasswordField.setValue(confirmPassword);
    }

    async clickOnUpdatePasswordButton() {
        await changePasswordLocators.updatePasswordButton.click();
    }
}
module.exports = new ChangePasswordActions();