const bottomNavigationLocators = require('./bottomNavigationLocators');

class BottomNavigationActions {

    async clickOkayButton() {
        await bottomNavigationLocators.okayButton.click();
    }
    
    async clickHomeButton() {
        await bottomNavigationLocators.homeButton.click();
    }

    async clickJobButton() {
        await bottomNavigationLocators.jobButton.click();
    }

    async clickCourseButton() {
        await bottomNavigationLocators.courseButton.click();
    }

    async clickProfileButton() {
        await bottomNavigationLocators.profileButton.click();
    }
}
module.exports = new BottomNavigationActions();