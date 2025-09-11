const courseAndJobCheckLocators= require('./courseAndJobCheckLocators');

class CourseAndJobCheckActions {

    async clickOnEnrolledCourses() {
        await courseAndJobCheckLocators.myEnrolledCourses.click();
        await driver.pause(2000);
        await driver.back()
    }

    async clickMyJobApplications() {
        await courseAndJobCheckLocators.myJobApplications.click();
        await driver.pause(2000);
        await driver.back()
    }
}
module.exports = new CourseAndJobCheckActions();