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
        return $('//android.widget.TextView[@text="YES"]');
    }

}

module.exports = new AssessmentLocators();
