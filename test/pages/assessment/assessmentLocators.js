class AssessmentLocators {
    get startAssessmentBtn() {
        return $('//android.widget.TextView[@text="Start Assessment"]');
    }

    get hospitalityAndFoodServicesBtn() {
        return $('//android.view.ViewGroup[@content-desc="Hospitality & Food Services "]');
    }
    get nextBtn() {
        return $('~Next');
    }

    get resAndcatBtn() {
        return $('//android.view.ViewGroup[@content-desc="Restaurants & Catering "]');
    }

    get selectionBtn() {
        return $('//android.view.ViewGroup[@content-desc="Chef "]');
    }

    get q1Answer() {
        return $('//android.view.ViewGroup[@content-desc="2, YES"]');
    }

    get q2Answer() {
        return $('//android.view.ViewGroup[@content-desc="2, 0-1 years"]');
    }

    get q3Answer() {
        return $('//android.view.ViewGroup[@content-desc="2, Basic culinary presentation & plating"]');
    }

    get q4Answer() {
        return $('//android.view.ViewGroup[@content-desc="1, Certified Executive Chef (CEC)"]');
    }

    get q5Answer() {
        return $('//android.widget.TextView[@text="Bangla"]');
    }

    get q6Answer() {
        return $('//android.view.ViewGroup[@content-desc="1, Flyer"]');
    }
    get submitAssessmentBtn() {
        return $('//android.view.ViewGroup[@content-desc="Yes, Submit Assessment"]');
    }

    get suggestedCountry() {
        return $('//android.view.ViewGroup[@content-desc="20%, Match, Chef, Romania"]/android.view.ViewGroup[1]');
    }

    get createProfileBtn() {
        return $('//android.view.ViewGroup[@content-desc="Create Profile"]');
    }

}

module.exports = new AssessmentLocators();
