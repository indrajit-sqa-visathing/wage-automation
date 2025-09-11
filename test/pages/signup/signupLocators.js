class SignupLocators{
    get fullNameField(){
        return $('//android.widget.EditText[@resource-id="text-input-outlined" and @text="Full Name"]');
    }
    
    get emailField(){
        return $('//android.widget.EditText[@resource-id="text-input-outlined" and @text="Email"]');
    }

    get passwordField(){
        return $('//android.widget.EditText[@resource-id="text-input-outlined" and @text="Password"]');
    }

    get signUpButton(){
        return $('//android.view.ViewGroup[@content-desc="Sign Up"]');
    }
}

module.exports = new SignupLocators();