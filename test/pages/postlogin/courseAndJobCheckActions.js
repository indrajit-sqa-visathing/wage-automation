const courseAndJobCheckLocators= require('./courseAndJobCheckLocators');

class CourseAndJobCheckActions {

    async clickOnEnrolledCourses() {
        await courseAndJobCheckLocators.myEnrolledCourses.click();
        await driver.pause(2000);
    }

    async clickMyJobApplications() {
        await courseAndJobCheckLocators.myJobApplications.click();
        await driver.pause(2000);
    }
}
module.exports = new CourseAndJobCheckActions();