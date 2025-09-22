class ChangePasswordLocators {
    get accountSettingsButton() {
        return $('//android.view.ViewGroup[@content-desc="Account Settings"]');
    }
    get changePassword(){
        return $('//android.view.ViewGroup[@content-desc="Change password"]');
    }
    get oldPasswordField(){
        return $('//android.widget.EditText[@resource-id="text-input-outlined" and @text="Old Password"]');
    }
    get newPasswordField(){
        return $('//android.widget.EditText[@resource-id="text-input-outlined" and @text="New Password"]');
    }
    get confirmPasswordField(){
        return $('//android.widget.EditText[@resource-id="text-input-outlined" and @text="Confirm Password"]');
    }
    get updatePasswordButton(){
        return $('//android.widget.TextView[@text="Update Password"]');
    }
}
module.exports = new ChangePasswordLocators();