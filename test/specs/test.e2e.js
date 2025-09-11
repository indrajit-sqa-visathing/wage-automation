const assessmentActions= require('../pages/assessment/assessmentActions');

const signupActions = require('../pages/signup/signupActions');
const otpActions = require('../pages/otp/otpActions');
const { createMailbox, waitForOtp } = require('../utils/tempMail');

describe('Assessment and Signup Test Suite', () => {
    it('Should Complete the Assessment', async () => {
        await driver.pause(3000);
        await assessmentActions.clickStartAssessment();
        console.log("Clicked Start Assessment");
        
        await driver.pause(1000);
        await assessmentActions.clickNextButton();
        console.log("Clicked Next Button");

        await driver.pause(1000);
        await assessmentActions.clickResAndCatButton();
        console.log("Clicked Restaurants and Catering Button");

        await driver.pause(1000);
        await assessmentActions.clickSelectionButton();
        await driver.pause(1000);
        await assessmentActions.clickNextButton();
        console.log("Clicked Chef Button then Next");

        await driver.pause(2000);
        await assessmentActions.clickQ1Answer();
        console.log("Clicked Yes for Q1");
        await driver.pause(2000);
        await assessmentActions.clickNextButton();
        console.log("Clicked Next Button");

        await driver.pause(2000);
        await assessmentActions.clickQ2Answer();
        console.log("Clicked 0-1 years for Q2");
        await driver.pause(2000);
        await assessmentActions.clickNextButton();
        console.log("Clicked Next Button");

        await driver.pause(3000);
        await assessmentActions.clickQ3Answer();
        console.log("Clicked Menu Planning & Recipe Development for Q3");
        await driver.pause(2000);
        await assessmentActions.clickNextButton();
        console.log("Clicked Next Button");

        await driver.pause(3000);
        await assessmentActions.clickQ4Answer();
        console.log("Clicked Certified in Professional Chef Course for Q4");
        await driver.pause(5000);
        await assessmentActions.clickNextButton();
        console.log("Clicked Next Button");

        await driver.pause(2000);
        await assessmentActions.clickQ5Answer();
        console.log("Clicked Bangla for Q5");
        await driver.pause(2000);
        await assessmentActions.clickNextButton();
        console.log("Clicked Next Button");

        await driver.pause(2000);
        await assessmentActions.clickQ6Answer();
        console.log("Clicked Flyer for Q6");
        await driver.pause(2000);
        await assessmentActions.clickNextButton();
        console.log("Clicked Next Button");

        await driver.pause(3000);
        await assessmentActions.clickSuggestedCountry();
        console.log("Clicked Suggested Country");
        
        await driver.pause(2000);
        await assessmentActions.clickCreateProfileButton();
        console.log("Clicked Create Profile Button");
        
        await driver.pause(2000);
    });

    it('Should sign up and verify OTP successfully', async () => {
        
        const { email, sidToken } = await createMailbox();
        console.log("Temp Email:", email);

        await signupActions.enterFirstName("Test User");
        await signupActions.enterEmail(email);
        await signupActions.enterPassword("Password123!");
        await signupActions.clickSignUpButton();

        const otp = await waitForOtp(sidToken);
        console.log("OTP Received:", otp);

        await otpActions.enterOtp(otp);
        await otpActions.tapVerifyButton();
        await otpActions.tapVerifyButton();
        await driver.pause(10000);
    });

});
