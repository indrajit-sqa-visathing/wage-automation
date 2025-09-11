class JobApplyLocators {
    get allJobsButton() {
        return $('(//android.widget.TextView[@text="Chef"])[2]');
    }

    applyButton(number) {
        return $(`(//android.view.ViewGroup[@content-desc="Apply Now"])[${number}]`);
    }

    get continueButton() {
        return $('//android.view.ViewGroup[@content-desc="Continue"]');
    }

    get finalSubmitButton() {
        return $('//android.view.ViewGroup[@content-desc="Final submission"]');
    }

    get okayButton() {
        return $('//android.widget.Button[@resource-id="android:id/button1"]');
    }

    get backToHomeButton() {
        return $('//android.view.ViewGroup[@content-desc="Back To Home"]');
    }
}

module.exports = new JobApplyLocators();