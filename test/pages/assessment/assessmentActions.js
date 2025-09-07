const assessmentLocators = require('./assessmentLocators');

class AssessmentActions {
    async clickStartAssessment() {
        await assessmentLocators.startAssessmentBtn.click();
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

}

module.exports = new AssessmentActions();
