const profileCompleteLocators = require('./profileCompleteLocators');

class ProfileCompleteActions {
    
    //basic info actions
    async enterFirstname(firstname) {
        await profileCompleteLocators.firstNameField.setValue(firstname);
    }
    async enterLastname(lastname) {
        await profileCompleteLocators.lastNameField.setValue(lastname);
    }
    async enterAddress(address) {
        await profileCompleteLocators.addressField.setValue(address);
    }
    async enterMobileNumber(mobileNumber) {
        await profileCompleteLocators.mobileNumberField.setValue(mobileNumber);
    }
    async selectNationalityDropdown() {
        await profileCompleteLocators.nationalityDropdown.click();
    }
    async selectSearch(text) {
        await profileCompleteLocators.search.setValue(text);
        await driver.keys('Enter');
    }
    async selectNationality() {
        await profileCompleteLocators.nationality.click();
        //await driver.back();
    }
    async clickOnBlank() {
        await profileCompleteLocators.blank.click();
    }
    async selectResidence() {
        await profileCompleteLocators.residenceDropdown.click();
        await driver.pause(2000);
        await profileCompleteLocators.residence.click();
    }
    async clickOnSaveAndContinueButton() {
        await profileCompleteLocators.saveAndContinueButton.click();
    }
    async clickOnCompleteProfileNow() {
        await profileCompleteLocators.completeProfileNow.click();
    }

    //nid actions
    async enterNidNumber(nid) {
        await profileCompleteLocators.nidNumber.setValue(nid);
    }
    async clickOnUploadNidFrontCopy() {
        await profileCompleteLocators.uploadNidFrontCopy.click();
    }
    async clickOnFileUploadBar() {
        await profileCompleteLocators.fileUploadBar.click();
    }
    async clickOnDownloads() {
        await profileCompleteLocators.downloads.click();
    }
    async clickOnSelectFile() {
        await profileCompleteLocators.selectFile.click();
    }
    async clickOnUploadNidBackCopy() {
        await profileCompleteLocators.uploadNidBackCopy.click();
    }

    //passport actions
    async clickOnPassportNumber(passportNumber){
        await profileCompleteLocators.passportNumber.setValue(passportNumber);
    }
    async enterPassportName(name){
        await profileCompleteLocators.passportName.setValue(name);
    }
    async enterPassportSurname(surname){
        await profileCompleteLocators.passportSurname.setValue(surname);
    }
    async enterPlaceOfBirth(place){
        await profileCompleteLocators.placeOfBirth.setValue(place);
    }
    async enterDateOfBirth(){
        await profileCompleteLocators.dateOfBirth.click();
    }
    async enterIssueDate(){
        await profileCompleteLocators.issueDate.click();
    }
    async enterExpiryDate(){
        await profileCompleteLocators.expiryDate.click();
    }
    async clickOnPassportUpload(){
        await profileCompleteLocators.uploadPassportCopy.click();
    }
    async clickOnOkayButton(){
        await profileCompleteLocators.okayButton.click();
    }

    //preferred job and country actions
    async selectPreferredCountryDropdown(){
        await profileCompleteLocators.preferredCountryDropdown.click();
    }
    async selectPreferredCountry(){
        await profileCompleteLocators.preferredCountry.click();
    }
    async selectPreferredJobCategoryDropdown(){
        await profileCompleteLocators.jobCategoryDropdown.click();
    }
    async selectPreferredJobCategory(){
        await profileCompleteLocators.preferredJobCategory.click();
    }
    async clickOnBlank2(){
        await profileCompleteLocators.blank2.click();
    }

    //Language proficiency actions
    async clickOnBengaliProficiency(){
        await profileCompleteLocators.banglaProficiency.click();
    }
    async clickOnLanguageLevel(){
        await profileCompleteLocators.languageLevel.click();
    }
    async clickOnDoneButton(){
        await profileCompleteLocators.doneButton.click();
    }

    //Work Experience actions
    async clickOnExpJobCategoryDropdown(){
        await profileCompleteLocators.expJobCategoryDropdown.click();
    }
    async clickOnBlank3(){
        await profileCompleteLocators.blank3.click();
    }
    async setJobTitle(job){
        await profileCompleteLocators.jobTitle.setValue(job);
    }
    async setCompanyName(companyName){
        await profileCompleteLocators.companyTitle.setValue(companyName);
    }
    async setSupervisorName(supervisorName){
        await profileCompleteLocators.supervisorName.setValue(supervisorName);
    }
    async setCountryCodeDropdown(){
        await profileCompleteLocators.countryCodeDropdown.click();
    }
    async setCountryCode(){
        await profileCompleteLocators.countryCode.click();
    }
    async setLocation(loc){
        await profileCompleteLocators.location.setValue(loc);
    }
    async setLocationDropdown(){
        await profileCompleteLocators.locationDropdown.click();
    }
    async setLocationType(){
        await profileCompleteLocators.locationType.click();
    }
    async setEmploymentTypeDropdown(){
        await profileCompleteLocators.employmentTypeDropdown.click();
    }
    async setEmploymentType(){
        await profileCompleteLocators.employmentType.click();
    }
    async clickOnStartDate(){
        await profileCompleteLocators.startDate.click();
    }
    async clickOnEndDate(){
        await profileCompleteLocators.endDate.click();
    }
    async setDescription(description){
        await profileCompleteLocators.description.setValue(description);
    }
    async clickOnUploadCertificate(){
        await profileCompleteLocators.uploadCertificate.click();
    }

    //Skills and Certifications actions
    async clickOnSkillDropdown(){
        await profileCompleteLocators.skillDropdown.click();
    }
    async clickOnSkill(){
        await profileCompleteLocators.skill.click();
    }
    async clickOnCertificateDropdown(){
        await profileCompleteLocators.certificateDropdown.click();
    }
    async clickOnCertificate(){
        await profileCompleteLocators.certificate.click();
    }
    async setSkillYears(rn){
        await profileCompleteLocators.skillYears.setValue(rn);
    }
    async clickOnBlank4(){
        await profileCompleteLocators.blank4.click();
    }
    async clickOnUploadCertificateAndSkills(){
        await profileCompleteLocators.uploadSkillAndCertificate.click();
    }

    //Educational Qualifications Actions
    async setInstituitionName(instituteName){
        await profileCompleteLocators.institution.setValue(instituteName);
    }
    async clickOnDegreeDropdown(){
        await profileCompleteLocators.degreeDropdown.click();
    }
    async clickOnDegree(){
        await profileCompleteLocators.degree.click();
    }
    async setFieldOfStudy(){
        await profileCompleteLocators.fieldOfStudy.setValue("Arts");
    }
    async setGrade(){
        await profileCompleteLocators.grade.setValue("3.50");
    }

    //Upload Photo and Video Actions
    async clickOnAvatar(){
        await profileCompleteLocators.avatar.click();
    }
    async clickOnFeatureImage(){
        await profileCompleteLocators.featurImage.click();
    }

    //Document Upload Actions
    async clickOnPoliceClearancerUpload(){
        await profileCompleteLocators.policeClearance.click();
    }
    async clickOnHealthCertificate(){
        await profileCompleteLocators.healthCertificate.click();
    }//issues with this action because of locator

}
module.exports = new ProfileCompleteActions();