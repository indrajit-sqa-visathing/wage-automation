const homeScreenButtonsLocators = require('./homeScreenButtonsLocators')

class HomeScreenButtonsActions {

    async clickOnCompleteProfileButton() {
        //await homeScreenButtonsLocators.completeProfileButton.waitForDisplayed({ timeout: 3000 });
        await homeScreenButtonsLocators.completeProfileButton.click();
        await driver.pause(2000);
    }

    async clickOnJobSeeAllButton() {
        await homeScreenButtonsLocators.jobSeeAllButton.waitForDisplayed({ timeout: 1000 });
        await homeScreenButtonsLocators.jobSeeAllButton.click();
        await driver.pause(2000);
    }

    async clickOnCourseSeeAllButton() {
        await homeScreenButtonsLocators.courseSeeAllButton.waitForDisplayed({ timeout: 2000 });
        await homeScreenButtonsLocators.courseSeeAllButton.click();
        await driver.pause(2000);
    }
}
module.exports = new HomeScreenButtonsActions();