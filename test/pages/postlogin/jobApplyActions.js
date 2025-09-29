const jobApplyLocators = require('./jobApplyLocators');

class JobApplyActions {
    async clickOnAllJobsButton() {
        await jobApplyLocators.allJobsButton.waitForDisplayed({ timeout: 2000 });
        await jobApplyLocators.allJobsButton.click();
        await driver.pause(3000);
    }

    async clickOnApplyButton(number) {
        const applyBtn = await jobApplyLocators.applyButton(number);
        await applyBtn.waitForDisplayed({ timeout: 2000 });
        await applyBtn.click();
        await driver.pause(3000);
    }

    async clickOnContinueButton() {
        await jobApplyLocators.continueButton.waitForDisplayed({ timeout: 5000 });
        await jobApplyLocators.continueButton.click();
        await driver.pause(2000);
    }

    async clickOnFinalSubmitButton() {
        await jobApplyLocators.finalSubmitButton.waitForDisplayed({ timeout: 5000 });
        await jobApplyLocators.finalSubmitButton.click();
        await driver.pause(2000);
    }

    async clickOnOkayButton() {
        await jobApplyLocators.okayButton.waitForDisplayed({ timeout: 5000 });
        await jobApplyLocators.okayButton.click();
        await driver.pause(2000);
    }

    async clickOnBackToHomeButton() {
        await jobApplyLocators.backToHomeButton.waitForDisplayed({ timeout: 5000 });
        await jobApplyLocators.backToHomeButton.click();
        await driver.pause(2000);
    }
}
module.exports = new JobApplyActions();