class OtpLocators {
    get otpInputField() {
        return $$('//android.view.ViewGroup[@resource-id="otp-input"]');
    }

    get verifyButton() {
        return $('//android.view.ViewGroup[@content-desc="Continue"]');
    }

}

module.exports = new OtpLocators();