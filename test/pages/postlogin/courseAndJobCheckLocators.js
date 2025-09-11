class CourseAndJobCheckLocators {
    
    get myEnrolledCourses() {
        return $('//android.view.ViewGroup[@content-desc="My Enrolled Courses"]');
    }

    get myJobApplications() {
        return $('//android.view.ViewGroup[@content-desc="My Applied Jobs"]');
    }
}
module.exports = new CourseAndJobCheckLocators();