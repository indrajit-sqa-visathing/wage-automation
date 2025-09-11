const signupLocators = require('./signupLocators');

class SignupActions {
    async enterFirstName(fullName) {
        await signupLocators.fullNameField.setValue(fullName);
    }
    async enterEmail(email) {
        await signupLocators.emailField.setValue(email);
    }

    async enterPassword(password) {
        await signupLocators.passwordField.setValue(password);
    }

    async clickSignUpButton() {
        await signupLocators.signUpButton.click();
    }
}

module.exports = new SignupActions();