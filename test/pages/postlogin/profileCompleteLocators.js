class ProfileCompleteLocators {
    get skipButton(){
        return $('//android.widget.TextView[@text="Skip"]');
    }
    //basic info locators
    get firstNameField(){
        return $('//android.widget.EditText[@resource-id="text-input-outlined" and @text="First Name"]'); 
    }
    get lastNameField(){ 
        return $('//android.widget.EditText[@resource-id="text-input-outlined" and @text="Last Name"]');
    }
    get addressField(){
        return $('//android.widget.EditText[@resource-id="text-input-outlined" and @text="Address"]');
    }
    get mobileNumberField(){
        return $('//android.widget.EditText[@text="Phone number"]');
    }
    get nationalityDropdown(){
        return $('//android.widget.TextView[@text="Nationality"]');
    }
    get search(){
        return $('//android.widget.EditText[@text="Search"]');
    }
    get nationality(){
        return $('//android.widget.TextView[@text="Bangladeshi"]');
    }
    get blank(){
        return $('//android.widget.TextView[@text="Basic Information Screen"]');
    }
    get residenceDropdown(){
        return $('//android.widget.TextView[@text="Resident Status"]');
    }
    get residence(){
        return $('//android.widget.TextView[@text="Own"]');
    }
    get saveAndContinueButton(){
        return $('//android.view.ViewGroup[@content-desc="Save & Continue"]');
    }
    get completeProfileNow(){
        return $('//android.widget.TextView[@text="Complete Profile Now"]');
    }



    //nid locators
    get nidNumber(){
        return $('//android.widget.EditText[@resource-id="text-input-outlined" and @text="Nid Number"]');
    }
    get uploadNidFrontCopy(){
        return $('//android.widget.TextView[@text="Upload NID front copy"]');
    }
    get fileUploadBar(){
        return $('//android.widget.ImageButton[@content-desc="Show roots"]');
    }
    get downloads(){
        return $('//android.widget.TextView[@resource-id="android:id/title" and @text="Downloads"]');
    }
    get selectFile(){
        return $('(//android.widget.ImageView[@resource-id="com.google.android.documentsui:id/icon_thumb"])[3]');
    }
    get uploadNidBackCopy(){
        return $('//android.widget.TextView[@text="Upload NID back copy"]');
    }

    //passport locators
    get passportNumber(){
        return $('//android.widget.EditText[@resource-id="text-input-outlined" and @text="Passport Number"]');
    }
    get passportName(){
        return $('//android.widget.EditText[@resource-id="text-input-outlined" and @text="Given Name"]');
    }
    get passportSurname(){
        return $('//android.widget.EditText[@resource-id="text-input-outlined" and @text="Surname"]');
    }
    get placeOfBirth(){
        return $('//android.widget.EditText[@resource-id="text-input-outlined" and @text="Place of Birth"]');
    }
    get okayButton(){
        return $('//android.widget.Button[@resource-id="android:id/button1"]');
    }
    get dateOfBirth(){
        return $('//android.view.ViewGroup[@content-desc="Date of Birth"]');
    }
    get issueDate(){
        return $('//android.view.ViewGroup[@content-desc="Issue date"]');
    }
    get expiryDate(){
        return $('//android.view.ViewGroup[@content-desc="Expiry date"]');
    }
    get uploadPassportCopy(){
        return $('//android.widget.TextView[@text="Upload Passport"]');
    }

    //preferred jobs and country locators
    get preferredCountryDropdown(){
        return $('(//android.widget.TextView[@text="Select countries"])[1]');
    }
    get preferredCountry(){
        return $('//android.widget.TextView[@text="Canada"]');
    }
    get jobCategoryDropdown(){
        return $('//android.widget.TextView[@text="Select job categories"]');
    }
    get preferredJobCategory(){
        return $('//android.view.ViewGroup[@content-desc="Chef"]');
    }
    get blank2(){
        return $('//android.widget.TextView[@text="Preferred Jobs and Country"]');
    }

    //Language Proficiency locators
    get banglaProficiency(){
        return $('//android.view.ViewGroup[@content-desc="Bangla"]');
    }
    get languageLevel(){
        return $('//android.view.ViewGroup[@content-desc="Native"]');
    }
    get doneButton(){
        return $('//android.view.ViewGroup[@content-desc="Done"]');
    }

    //Work Experience locators
    get expJobCategoryDropdown(){
        return $('//android.widget.TextView[@text="Job Categories"]');
    }
    get blank3(){
        return $('//android.widget.TextView[@text="Work Experience"]');
    }
    get jobTitle(){
        return $('//android.widget.EditText[@resource-id="text-input-outlined" and @text="Job title"]');
    }
    get companyTitle(){
        return $('//android.widget.EditText[@resource-id="text-input-outlined" and @text="Company Name"]');
    }
    get supervisorName(){
        return $('//android.widget.EditText[@resource-id="text-input-outlined" and @text="Supervisor Name"]');
    }
    get countryCodeDropdown(){
        return $('//android.view.ViewGroup[@content-desc="+"]');
    }
    get countryCode(){
        return $('//android.view.ViewGroup[@content-desc="🇧🇩, +880, Bangladesh"]');
    }
    get location(){
        return $('//android.widget.EditText[@resource-id="text-input-outlined" and @text="Location"]');
    }
    get locationDropdown(){
        return $('//android.widget.TextView[@text="Location type"]');
    }
    get locationType(){
        //return $('//android.widget.TextView[@text="On-site"]');
        return $('//android.view.ViewGroup[@content-desc="Onsite"]');
    }
    get employmentTypeDropdown(){
        return $('//android.widget.TextView[@text="Employment type"]');
    }
    get employmentType(){
        return $('//android.view.ViewGroup[@content-desc="Fulltime"]');
    }
    get startDate(){
        return $('//android.widget.TextView[@text="Start date"]');
    }
    get endDate(){
        return $('//android.widget.TextView[@text="End date"]');
    }
    get description(){
        return $('//android.widget.EditText[@resource-id="text-input-outlined" and @text="Write additional information here"]');
    }
    get uploadCertificate(){
        return $('//android.view.ViewGroup[@content-desc="Upload certificate"]/android.view.ViewGroup');
    }

    //Skills and Certifications locators
    get skillDropdown(){
        return $('//android.widget.TextView[@text="Select a skill"]');
    }
    get skill(){
        return $('//android.widget.TextView[@text="Food & Beverage Service"]');
    }
    get blank4(){
        return $('//android.widget.TextView[@text="Skills & Certificates"]');
    }
    get certificateDropdown(){
        return $('//android.widget.TextView[@text="Select a certificate"]');
    }
    get certificate(){
        return $('//android.view.ViewGroup[@content-desc="Certified in Food & Beverage Service"]');
    }
    get skillYears(){
        return $('//android.widget.EditText[@resource-id="text-input-outlined"]');
    }
    get uploadSkillAndCertificate(){
        return $('//android.widget.TextView[@text="Upload the file"]');
    }

    //Educational Qualifications Locators
    get institution(){
        return $('//android.widget.EditText[@resource-id="text-input-outlined" and @text="Institution Name"]');
    }
    get degreeDropdown(){
        return $('//android.widget.TextView[@text="Degree"]');
    }
    get degree(){
        return $('//android.widget.TextView[@text="Secondary School Certificate"]');
    }
    get fieldOfStudy(){
        return $('//android.widget.EditText[@resource-id="text-input-outlined" and @text="Field Of Study"]');
    }
    get grade(){
        return $('//android.widget.EditText[@resource-id="text-input-outlined" and @text="EX: 3.5"]');
    }
    
    //Upload Photo and Video Locators
    get profilePicture(){
        return $('//android.view.ViewGroup[@content-desc="Upload Profile Picture"]');
    }
    get featurImage(){
        return $('//android.view.ViewGroup[@content-desc="Upload Feature Image"]');
    }
    get myGallery(){
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[6]/android.view.ViewGroup/com.horcrux.svg.SvgView/com.horcrux.svg.GroupView/com.horcrux.svg.PathView');
    }
    get selectFileFromGallery(){
        return $('//android.widget.ImageView[@resource-id="com.google.android.providers.media.module:id/icon_thumbnail"]');
    }

    //Document Upload Locators
    get policeClearance(){
        return $('(//android.view.ViewGroup[@content-desc="Upload Document"])[1]/android.view.ViewGroup');
    }
    get healthCertificate(){
        return $('(//android.widget.TextView[@text="Upload Document"])[2]');
    }//issue in this locator
    
}
module.exports = new ProfileCompleteLocators();