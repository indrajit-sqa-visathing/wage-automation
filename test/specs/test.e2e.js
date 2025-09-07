
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
    });
});