const assessmentLocators = require('./assessmentLocators');

class AssessmentActions {
    async clickStartAssessment() {
        await assessmentLocators.startAssessmentBtn.click();
    }
    async clickHospitalityAndFoodServicesButton() {
        await assessmentLocators.hospitalityAndFoodServicesBtn.click();
    }
    async clickNextButton() {
        await assessmentLocators.nextBtn.click();
    }
    
    async clickResAndCatButton() {
        await assessmentLocators.resAndcatBtn.click();
    }

    async clickSelectionButton() {
        await assessmentLocators.selectionBtn.click();
    }

    async clickQ1Answer() {
        await assessmentLocators.q1Answer.click();
    }

    async clickQ2Answer() {
        await assessmentLocators.q2Answer.click();
    }

    async clickQ3Answer() {
        await assessmentLocators.q3Answer.click();
    }

    async clickQ4Answer() {
        await assessmentLocators.q4Answer.click();
    }

    async clickQ5Answer() {
        await assessmentLocators.q5Answer.click();
    }

    async clickQ6Answer() {
        await assessmentLocators.q6Answer.click();
    }
    async clickSubmitAssessmentButton() {
        await assessmentLocators.submitAssessmentBtn.click();
    }
    async clickSuggestedCountry() {
        await assessmentLocators.suggestedCountry.click();
    }

    async clickCreateProfileButton() {
        await assessmentLocators.createProfileBtn.click();
    }

}

module.exports = new AssessmentActions();
