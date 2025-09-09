const otpLocators=require('./otpLocators');

class OtpActions {
    // async enterOtp(otp){
    //     console.log("Entering OTP: " + otp);
    //     const otpInput=await otpLocators.otpInputField;
    //     //console.log("OTPInput:", otpInput);
    //     await otpInput.setValue(otp);
    // }

    async enterOtp(otp) {
        console.log("Entering OTP: " + otp);
        const otpArray = otp.split('');

        // wait for OTP fields to appear
        await driver.waitUntil(async () => {
            const elems = await otpLocators.otpInputField;
            return elems.length >= otpArray.length;
        }, {
            timeout: 10000,
            timeoutMsg: 'OTP fields not found on screen!'
        });

        const inputs = await otpLocators.otpInputField;

        for (let i = 0; i < otpArray.length; i++) {
            const input = inputs[i];
            await input.scrollIntoView();        // scroll if needed
            await input.click();                  // focus
            await driver.keys(otpArray[i]);       // enter digit
            await driver.pause(200);
        }
    }

    async tapVerifyButton(){
        await otpLocators.verifyButton.click();
        console.log("Tapped on Verify Button");
    }

}
module.exports = new OtpActions();