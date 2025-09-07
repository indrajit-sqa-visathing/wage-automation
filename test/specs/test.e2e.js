
const assessmentActions= require('../pages/assessment/assessmentActions');

describe('Assessment Test', () => {
    it('Should Complete the Journey', async () => {
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
        
        await driver.pause(5000);
        await assessmentActions.clickCreateProfileButton();
        console.log("Clicked Create Profile Button");
        
        await driver.pause(5000);
    });
});