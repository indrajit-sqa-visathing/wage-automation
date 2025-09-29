class LogoutLocators {
    get logoutButton() { return $('//android.widget.TextView[@text="Log Out"]'); }
    get logoutConfirmation() { return $('//android.view.ViewGroup[@content-desc="Logout"]'); }  
}
module.exports = new LogoutLocators();