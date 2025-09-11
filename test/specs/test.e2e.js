const assessmentActions = require('../pages/assessment/assessmentActions');
const bottomNavigationActions = require('../pages/postlogin/bottomNavigationActions');
const homeScreenButtonsActions = require('../pages/postlogin/homeScreenButtonsActions');
const homeScreenButtonsLocators = require('../pages/postlogin/homeScreenButtonsLocators');
const courseEnrollActions = require('../pages/postlogin/courseEnrollActions');
const jobApplyActions = require('../pages/postlogin/jobApplyActions');
const signupActions = require('../pages/signup/signupActions');
const otpActions = require('../pages/otp/otpActions');
const courseAndJobCheckActions = require('../pages/postlogin/courseAndJobCheckActions');
const utility = require('../utils/utility');
const { scrollToElement } = require('../utils/scroll');
const { createMailbox, waitForOtp } = require('../utils/tempMail');
const courseEnrollLocators = require('../pages/postlogin/courseEnrollLocators');
const jobApplyLocators = require('../pages/postlogin/jobApplyLocators');
var randomNumber;


// describe('Assessment and Signup Test Suite', () => {
//     it('Should Complete the Assessment', async () => {
//         await driver.pause(3000);
//         await assessmentActions.clickStartAssessment();
//         console.log("Clicked Start Assessment");

//         await driver.pause(1000);
//         await assessmentActions.clickNextButton();
//         console.log("Clicked Next Button");

//         await driver.pause(1000);
//         await assessmentActions.clickResAndCatButton();
//         console.log("Clicked Restaurants and Catering Button");

//         await driver.pause(1000);
//         await assessmentActions.clickSelectionButton();
//         await driver.pause(1000);
//         await assessmentActions.clickNextButton();
//         console.log("Clicked Chef Button then Next");

//         await driver.pause(2000);
//         await assessmentActions.clickQ1Answer();
//         console.log("Clicked Yes for Q1");
//         await driver.pause(2000);
//         await assessmentActions.clickNextButton();
//         console.log("Clicked Next Button");

//         await driver.pause(2000);
//         await assessmentActions.clickQ2Answer();
//         console.log("Clicked 0-1 years for Q2");
//         await driver.pause(2000);
//         await assessmentActions.clickNextButton();
//         console.log("Clicked Next Button");

//         await driver.pause(3000);
//         await assessmentActions.clickQ3Answer();
//         console.log("Clicked Menu Planning & Recipe Development for Q3");
//         await driver.pause(2000);
//         await assessmentActions.clickNextButton();
//         console.log("Clicked Next Button");

//         await driver.pause(3000);
//         await assessmentActions.clickQ4Answer();
//         console.log("Clicked Certified in Professional Chef Course for Q4");
//         await driver.pause(5000);
//         await assessmentActions.clickNextButton();
//         console.log("Clicked Next Button");

//         await driver.pause(2000);
//         await assessmentActions.clickQ5Answer();
//         console.log("Clicked Bangla for Q5");
//         await driver.pause(2000);
//         await assessmentActions.clickNextButton();
//         console.log("Clicked Next Button");

//         await driver.pause(2000);
//         await assessmentActions.clickQ6Answer();
//         console.log("Clicked Flyer for Q6");
//         await driver.pause(2000);
//         await assessmentActions.clickNextButton();
//         console.log("Clicked Next Button");

//         await driver.pause(3000);
//         await assessmentActions.clickSuggestedCountry();
//         console.log("Clicked Suggested Country");

//         await driver.pause(2000);
//         await assessmentActions.clickCreateProfileButton();
//         console.log("Clicked Create Profile Button");

//         await driver.pause(2000);
//     });

//     it('Should sign up and verify OTP successfully', async () => {

//         const { email, sidToken } = await createMailbox();
//         console.log("Temp Email:", email);

//         await signupActions.enterFirstName("Test User");
//         await signupActions.enterEmail(email);
//         await signupActions.enterPassword("Password123!");
//         await signupActions.clickSignUpButton();

//         const otp = await waitForOtp(sidToken);
//         console.log("OTP Received:", otp);

//         await otpActions.enterOtp(otp);
//         await otpActions.tapVerifyButton();
//         await otpActions.tapVerifyButton();
//         await driver.pause(10000);
//     });

// });

describe('After Logging in Test Suite', () => {
    // it('T-001: Verifying whether Bottom Navigation are working', async () => {

    //     await driver.pause(2000);
    //     await bottomNavigationActions.clickOkayButton();
    //     console.log("Clicked Okay Button");
    //     await driver.pause(2000);

    //     await bottomNavigationActions.clickHomeButton();
    //     console.log("Clicked Home Button");
    //     await driver.pause(2000);

    //     await bottomNavigationActions.clickJobButton();
    //     console.log("Clicked Job Button");
    //     await driver.pause(2000);

    //     await bottomNavigationActions.clickCourseButton();
    //     console.log("Clicked Course Button");
    //     await driver.pause(2000);

    //     await bottomNavigationActions.clickProfileButton();
    //     console.log("Clicked Profile Button");
    //     await driver.pause(2000);
    // });

    // it('T-002: Verifying if Home Screen buttons are wokring', async () => {


    //     await bottomNavigationActions.clickOkayButton();
    //     console.log("Clicked Okay Button");
    //     await driver.pause(2000);

    //     await homeScreenButtonsActions.clickOnCompleteProfileButton();
    //     console.log("Clicked Complete Profile Button");

    //     await homeScreenButtonsActions.clickOnJobSeeAllButton();
    //     console.log("Clicked Job See All Button");

    //     const courseSeeAll = await homeScreenButtonsLocators.courseSeeAllButton;
    //     await scrollToElement(courseSeeAll);

    //     await homeScreenButtonsActions.clickOnCourseSeeAllButton();
    //     console.log("Clicked Course See All Button");

    //     await driver.pause(2000);

    // });

    // it('T-003: Verifying if Courses can be enrolled', async () => {

    //     await bottomNavigationActions.clickOkayButton();
    //     console.log("Clicked Okay Button");
    //     await driver.pause(2000);

    //     const courseSeeAll = await homeScreenButtonsLocators.courseSeeAllButton;
    //     await scrollToElement(courseSeeAll);

    //     await homeScreenButtonsActions.clickOnCourseSeeAllButton();
    //     console.log("Clicked Course See All Button");

    //     await driver.pause(2000);

    //     randomNumber = await utility.randomNumber(1,4);

    //     await courseEnrollActions.clickCourseEnrollButton(randomNumber);
    //     console.log("Clicked on Random Course");

    //     const enrollVisible = await courseEnrollLocators.enrollButton;
    //     await scrollToElement(enrollVisible);

    //     await courseEnrollActions.clickEnrollButton();
    //     console.log("Clicked Enroll Button");

    //     await courseEnrollActions.clickYesButton();
    //     console.log("Clicked Yes Button");

    //     await driver.pause(3000);

    // });

    // it('T-004: Verifying if jobs can be applied in all countries', async () => {

    //     await bottomNavigationActions.clickOkayButton();
    //     console.log("Clicked Okay Button");
    //     await driver.pause(2000);

    //     await homeScreenButtonsActions.clickOnJobSeeAllButton();
    //     console.log("Clicked Job See All Button");
    //     await driver.pause(3000);

    //     await jobApplyActions.clickOnAllJobsButton();
    //     console.log("Clicked Job See All Button in Job Screen");
    //     await driver.pause(3000);

    //     randomNumber = await utility.randomNumber(1,2);

    //     await jobApplyActions.clickOnApplyButton(randomNumber);
    //     console.log("Clicked on Random Apply Button");

    //     const continueVisible = await jobApplyLocators.continueButton;
    //     await scrollToElement(continueVisible);

    //     await jobApplyActions.clickOnContinueButton();
    //     console.log("Clicked on Continue Button");

    //     const finalSubmissionVisible = await jobApplyLocators.finalSubmitButton;
    //     await scrollToElement(finalSubmissionVisible);

    //     await jobApplyActions.clickOnFinalSubmitButton();
    //     console.log("Clicked on Final Submit Button");

    //     await jobApplyActions.clickOnOkayButton();
    //     console.log("Clicked on Okay Button");

    //     await jobApplyActions.clickOnBackToHomeButton();
    //     console.log("Clicked on Back to Home Button");

    //     await driver.pause(5000);
    // });

    // it('T-005: Verifying if Enrolled Courses and My Job Applications can be seen from Profile Menu', async () => {
    //     await bottomNavigationActions.clickOkayButton();
    //     console.log("Clicked Okay Button");
    //     await driver.pause(2000);

    //     await bottomNavigationActions.clickProfileButton();
    //     console.log("Clicked Profile Button");
    //     await driver.pause(2000);

    //     await courseAndJobCheckActions.clickOnEnrolledCourses();
    //     console.log("Clicked Enrolled Courses");
    //     await driver.pause(2000);
        
    //     await courseAndJobCheckActions.clickMyJobApplications();
    //     console.log("Clicked My Job Applications");
    //     await driver.pause(2000);
    // });
    
});  