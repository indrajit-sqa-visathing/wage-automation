const assessmentActions = require('../pages/assessment/assessmentActions');
const bottomNavigationActions = require('../pages/postlogin/bottomNavigationActions');
const homeScreenButtonsActions = require('../pages/postlogin/homeScreenButtonsActions');
const homeScreenButtonsLocators = require('../pages/postlogin/homeScreenButtonsLocators');
const courseEnrollActions = require('../pages/postlogin/courseEnrollActions');
const jobApplyActions = require('../pages/postlogin/jobApplyActions');
const signupActions = require('../pages/signup/signupActions');
const otpActions = require('../pages/otp/otpActions');
const courseAndJobCheckActions = require('../pages/postlogin/courseAndJobCheckActions');
const changePasswordActions = require('../pages/postlogin/changePasswordActions');
const utility = require('../utils/utility');
const profileCompleteActions = require('../pages/postlogin/profileCompleteActions');
const courseEnrollLocators = require('../pages/postlogin/courseEnrollLocators');
const jobApplyLocators = require('../pages/postlogin/jobApplyLocators');
const { scrollToElement } = require('../utils/scroll');
const { createMailbox, waitForOtp } = require('../utils/tempMail');
const profileCompleteLocators = require('../pages/postlogin/profileCompleteLocators');
const logoutActions = require('../pages/postlogin/logoutActions');
const darkmodeActions = require('../pages/postlogin/darkmodeActions');
var randomNumber, firstname, lastname, address, mobileNumber, nid;


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

    //     await bottomNavigationActions.clickHomeButton();
    //     await homeScreenButtonsActions.clickOnCompleteProfileButton();
    //     console.log("Clicked Complete Profile Button");
    //     await driver.back();

    //     await homeScreenButtonsActions.clickOnJobSeeAllButton();
    //     console.log("Clicked Job See All Button");
    //     await driver.back();

    //     const courseSeeAll = await homeScreenButtonsLocators.courseSeeAllButton;
    //     await scrollToElement(courseSeeAll);

    //     await homeScreenButtonsActions.clickOnCourseSeeAllButton();
    //     console.log("Clicked Course See All Button");
    //     await driver.back();

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
    //     await driver.back();
    //     await driver.back();
    //     await driver.back();

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
    //     console.log("Randomly clicking on Apply Button");

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
    //     await driver.back();
    //     await driver.pause(2000);

    //     await courseAndJobCheckActions.clickMyJobApplications();
    //     console.log("Clicked My Job Applications");
    //     await driver.back();
    //     await jobApplyActions.clickOnBackToHomeButton();

    //     await driver.pause(2000);
    // });

    // it('T-006: Profile Completion', async () => {

    //     // await bottomNavigationActions.clickOkayButton();
    //     // console.log("Clicked Okay Button");
    //     // await driver.pause(2000);


    //    firstname = "Test "+ await utility.randomString(3);
    //    lastname = "User "+ await utility.randomString(3);
    //    address = "Dhaka, "+ await utility.randomString(5);
    //    mobileNumber = "1711"+ await utility.randomNumber(1000000,9999999);

    //    /*Basic Information*/
    //       await homeScreenButtonsActions.clickOnCompleteProfileButton();
    // //    await profileCompleteActions.enterFirstname(firstname);
    // //    await profileCompleteActions.enterLastname(lastname);
    // //    await profileCompleteActions.enterAddress(address);
    // //    await profileCompleteActions.enterMobileNumber(mobileNumber);

    // //    await profileCompleteActions.selectNationalityDropdown();
    // //    await profileCompleteActions.selectSearch("Bangladeshi");
    // //    await profileCompleteActions.selectNationality();
    // //    await profileCompleteActions.clickOnBlank(); 
    // //    await profileCompleteActions.selectResidence();
    //    await profileCompleteActions.clickOnSaveAndContinueButton();
    //    await profileCompleteActions.clickOnCompleteProfileNow();

    //     /*NID Information*/
    //     // nid = ""+ await utility.randomNumber(1000000000,9999999999);
    //     // await profileCompleteActions.enterNidNumber(nid);
    //     // await profileCompleteActions.enterAddress(address);
    //     // await profileCompleteActions.clickOnUploadNidFrontCopy();
    //     // await driver.pause(2000);
    //     // await profileCompleteActions.clickOnFileUploadBar();
    //     // await driver.pause(2000);
    //     // await profileCompleteActions.clickOnDownloads();
    //     // await driver.pause(2000);
    //     // await profileCompleteActions.clickOnSelectFile();
    //     // await driver.pause(2000);
    //     // await profileCompleteActions.clickOnUploadNidBackCopy();
    //     // await driver.pause(2000);
    //     // await profileCompleteActions.clickOnFileUploadBar();
    //     // await driver.pause(2000);
    //     // await profileCompleteActions.clickOnDownloads();
    //     // await driver.pause(2000);
    //     // await profileCompleteActions.clickOnSelectFile();
    //     // await driver.pause(2000);
    //     await profileCompleteActions.clickOnSaveAndContinueButton();
    //     await profileCompleteActions.clickOnCompleteProfileNow();

    //     /*Passport Information*/
    //     // await profileCompleteActions.clickOnPassportNumber(mobileNumber);
    //     // await profileCompleteActions.enterPassportName(firstname);
    //     // await profileCompleteActions.enterPassportSurname(lastname);
    //     // await profileCompleteActions.enterPlaceOfBirth("Dhaka");
    //     // await profileCompleteActions.enterDateOfBirth();
    //     // await profileCompleteActions.clickOnOkayButton();
    //     // await profileCompleteActions.enterIssueDate();
    //     // await profileCompleteActions.clickOnOkayButton();
    //     // await profileCompleteActions.enterExpiryDate();
    //     // await profileCompleteActions.clickOnOkayButton();
    //     // await profileCompleteActions.clickOnPassportUpload();
    //     // await profileCompleteActions.clickOnFileUploadBar();
    //     // await driver.pause(2000);
    //     // await profileCompleteActions.clickOnDownloads();
    //     // await driver.pause(2000);
    //     // await profileCompleteActions.clickOnSelectFile();
    //     // await driver.pause(2000);
    //     await profileCompleteActions.clickOnSaveAndContinueButton();
    //     await profileCompleteActions.clickOnCompleteProfileNow();

    //     /*Preferred Job and Country*/
    //     // await profileCompleteActions.selectPreferredCountryDropdown();
    //     // await profileCompleteActions.selectSearch("Canada");
    //     // await profileCompleteActions.selectPreferredCountry();
    //     // await profileCompleteActions.clickOnBlank2();
    //     // await profileCompleteActions.selectPreferredJobCategoryDropdown();
    //     // await profileCompleteActions.selectSearch("Chef");
    //     // await profileCompleteActions.selectPreferredJobCategory();
    //     // await profileCompleteActions.clickOnBlank2();

    //     await profileCompleteActions.clickOnSaveAndContinueButton();
    //     await profileCompleteActions.clickOnCompleteProfileNow();

    //     /*Language Proficiency*/
    //     // await profileCompleteActions.clickOnBengaliProficiency();
    //     // await profileCompleteActions.clickOnLanguageLevel();
    //     // await profileCompleteActions.clickOnDoneButton();

    //     await profileCompleteActions.clickOnSaveAndContinueButton();
    //     await profileCompleteActions.clickOnCompleteProfileNow();

    //     /*Work Experience*/
    //     // await profileCompleteActions.clickOnExpJobCategoryDropdown();
    //     // await profileCompleteActions.selectPreferredJobCategory();
    //     // await profileCompleteActions.clickOnBlank3();
    //     // await profileCompleteActions.setJobTitle("Chef");
    //     // await profileCompleteActions.setCompanyName("Company "+ await utility.randomString(3));
    //     // await profileCompleteActions.setSupervisorName("Supervisor "+ await utility.randomString(3));

    //     // await profileCompleteActions.setCountryCodeDropdown();
    //     // await profileCompleteActions.selectSearch("880");
    //     // await profileCompleteActions.setCountryCode();
    //     // await profileCompleteActions.clickOnBlank3();
    //     // await profileCompleteActions.enterMobileNumber(mobileNumber);
    //     // await profileCompleteActions.setLocation("Dhaka");
    //     // const location = await profileCompleteLocators.locationDropdown;
    //     // await scrollToElement(location);
    //     // await profileCompleteActions.setLocationDropdown();
    //     // await profileCompleteActions.setLocationType();
    //     // await profileCompleteActions.clickOnBlank3();

    //     // await profileCompleteActions.setEmploymentTypeDropdown();
    //     // await profileCompleteActions.setEmploymentType();
    //     // await profileCompleteActions.clickOnBlank3();
    //     // await profileCompleteActions.clickOnStartDate();
    //     // await profileCompleteActions.clickOnOkayButton();
    //     // await profileCompleteActions.clickOnEndDate();
    //     // await profileCompleteActions.clickOnOkayButton();
    //     // await profileCompleteActions.setDescription("Experienced Chef with a passion for culinary excellence and a track record of leading successful kitchen teams.");
    //     // await profileCompleteActions.clickOnUploadCertificate();
    //     // await profileCompleteActions.clickOnFileUploadBar();
    //     // await driver.pause(2000);
    //     // await profileCompleteActions.clickOnDownloads();
    //     // await driver.pause(2000);
    //     // await profileCompleteActions.clickOnSelectFile();
    //     // await driver.pause(2000);

    //     await profileCompleteActions.clickOnSaveAndContinueButton();
    //     await profileCompleteActions.clickOnCompleteProfileNow();

    //     /*Skills and Certificates*/
    //     // const rn= await utility.randomNumber(1,5);
    //     // await profileCompleteActions.setSkillYears(rn);
    //     // await profileCompleteActions.clickOnSkillDropdown();
    //     // await profileCompleteActions.clickOnSkill();
    //     // await profileCompleteActions.clickOnBlank4();
    //     // await profileCompleteActions.clickOnCertificateDropdown();
    //     // await profileCompleteActions.clickOnCertificate();
    //     // await profileCompleteActions.clickOnUploadCertificateAndSkills();
    //     // await profileCompleteActions.clickOnFileUploadBar();
    //     // await driver.pause(2000);
    //     // await profileCompleteActions.clickOnDownloads();
    //     // await driver.pause(2000);
    //     // await profileCompleteActions.clickOnSelectFile();
    //     // await driver.pause(2000);

    //     await profileCompleteActions.clickOnSaveAndContinueButton();
    //     await profileCompleteActions.clickOnCompleteProfileNow();

    //     /*Educational Qualifications*/
    //     // await profileCompleteActions.setInstituitionName("Dhaka " + await utility.randomString(3));
    //     // await profileCompleteActions.clickOnDegreeDropdown();
    //     // await profileCompleteActions.clickOnDegree();
    //     // await profileCompleteActions.setFieldOfStudy();
    //     // await profileCompleteActions.clickOnStartDate();
    //     // await profileCompleteActions.clickOnOkayButton();
    //     // await profileCompleteActions.clickOnEndDate();
    //     // await profileCompleteActions.clickOnOkayButton();
    //     // await profileCompleteActions.setGrade();
    //     // await profileCompleteActions.setDescription("This is " + await utility.randomString(4));
    //     // const certi = await profileCompleteLocators.uploadCertificate;
    //     // await scrollToElement(certi);
    //     // await profileCompleteActions.clickOnUploadCertificate();
    //     // await profileCompleteActions.clickOnFileUploadBar();
    //     // await driver.pause(2000);
    //     // await profileCompleteActions.clickOnDownloads();
    //     // await driver.pause(2000);
    //     // await profileCompleteActions.clickOnSelectFile();
    //     // await driver.pause(2000);

    //     await profileCompleteActions.clickOnSaveAndContinueButton();
    //     await profileCompleteActions.clickOnCompleteProfileNow();

    //     /*Upload Photo and Video*/
    //     // await profileCompleteActions.clickOnAvatar();
    //     // await profileCompleteActions.clickOnFileUploadBar();
    //     // await driver.pause(2000);
    //     // await profileCompleteActions.clickOnDownloads();
    //     // await driver.pause(2000);
    //     // await profileCompleteActions.clickOnSelectFile();
    //     // await driver.pause(2000);
    //     // await profileCompleteActions.clickOnFeatureImage();
    //     // await profileCompleteActions.clickOnFileUploadBar();
    //     // await driver.pause(2000);
    //     // await profileCompleteActions.clickOnDownloads();
    //     // await driver.pause(2000);
    //     // await profileCompleteActions.clickOnSelectFile();
    //     // await driver.pause(2000);

    //     await profileCompleteActions.clickOnSaveAndContinueButton();
    //     await profileCompleteActions.clickOnCompleteProfileNow();

    //     /*Document Upload*/
    //     // await profileCompleteActions.clickOnPoliceClearancerUpload();
    //     // await profileCompleteActions.clickOnFileUploadBar();
    //     // await driver.pause(2000);
    //     // await profileCompleteActions.clickOnDownloads();
    //     // await driver.pause(2000);
    //     // await profileCompleteActions.clickOnSelectFile();
    //     // await driver.pause(2000);

    //     // await profileCompleteActions.clickOnHealthCertificate();
    //     // await profileCompleteActions.clickOnFileUploadBar();
    //     // await driver.pause(2000);
    //     // await profileCompleteActions.clickOnDownloads();
    //     // await driver.pause(2000);
    //     // await profileCompleteActions.clickOnSelectFile();
    //     // await driver.pause(2000);

    //     await profileCompleteActions.clickOnSaveAndContinueButton();
    //     await profileCompleteActions.clickOnCompleteProfileNow();
    //     await bottomNavigationActions.clickHomeButton();

    //     await driver.pause(5000);

    // });

    // it('T-007: Verifying if password is changeable', async () => {
    //     await bottomNavigationActions.clickProfileButton();
    //     await driver.pause(2000);
    //     var oldPassword = "123456";
    //     var newPassword = "12345678";
    //     var confirmPassword = "12345678";
    //     await changePasswordActions.clickOnChangePasswordButton();
    //     await changePasswordActions.enterOldPassword(oldPassword);
    //     await changePasswordActions.enterNewPassword(newPassword);
    //     await changePasswordActions.enterConfirmPassword(confirmPassword);
    //     await changePasswordActions.clickOnUpdatePasswordButton();
    //     await driver.pause(2000);
    //     for(let i=0; i<3; i++){
    //         await driver.back();
    //     }
    //     await bottomNavigationActions.clickHomeButton();
    // });

    // it('T-008: Verifying if Darkmode works', async () => {
    //     await bottomNavigationActions.clickProfileButton();
    //     await driver.pause(2000);
    //     await darkmodeActions.clickOnDarkModeButton();
    //     await driver.pause(2000);
    //     await darkmodeActions.clickOnOnButton();
    //     await driver.pause(2000);
    //     await driver.back();
    //     await bottomNavigationActions.clickHomeButton();
    // });


    //     it('T-009: Verifying if Logout works', async () => {
    //     await bottomNavigationActions.clickProfileButton();
    //     await driver.pause(2000);
    //     await logoutActions.clickOnLogoutButton();
    //     await driver.pause(2000);
    //     await logoutActions.clickOnLogoutConfirmation();
    //     await driver.pause(2000);
    // });
});