class AssessmentLocators {
    get startAssessmentBtn() {
        return $('~Start Assessment');
    }

    get nextBtn() {
        return $('~Next');
    }

    get resAndcatBtn() {
        return $('~Restaurants & Catering');
    }

    get selectionBtn() {
        return $('~Chef');
    }

    get q1Answer() {
        return $('//android.view.ViewGroup[@content-desc="2, YES"]');
    }

    get q2Answer() {
        return $('//android.view.ViewGroup[@content-desc="2, 0-1 years"]');
    }

    get q3Answer() {
        return $('//android.widget.TextView[@text="Menu Planning & Recipe Development"]');
    }

    get q4Answer() {
        return $('//android.view.ViewGroup[@content-desc="3, Certified in Professional Chef Course"]');
    }

    get q5Answer() {
        return $('//android.widget.TextView[@text="Bangla"]');
    }

    get q6Answer() {
        return $('//android.view.ViewGroup[@content-desc="1, Flyer"]');
    }

    get suggestedCountry() {
        return $('//android.view.ViewGroup[@content-desc="50%, Match, Chef, Cambodia"]/android.view.ViewGroup[1]');
    }

    get createProfileBtn() {
        return $('//android.view.ViewGroup[@content-desc="Create Profile"]');
    }

}

module.exports = new AssessmentLocators();
