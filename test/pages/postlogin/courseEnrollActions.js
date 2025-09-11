const courseEnrollLocators = require('./courseEnrollLocators');

class CourseEnrollActions {
    async clickCourseEnrollButton(number) {
        const button = await courseEnrollLocators.courseEnrollButton(number);
        await button.waitForDisplayed({ timeout: 3000 });
        await button.click();
    }

    async clickEnrollButton() {
        const button = await courseEnrollLocators.enrollButton;
        await button.waitForDisplayed({ timeout: 2000 });
        await button.click();
    }
    
    async clickYesButton() {
        await courseEnrollLocators.yesButton.click();
    }
}

module.exports = new CourseEnrollActions();