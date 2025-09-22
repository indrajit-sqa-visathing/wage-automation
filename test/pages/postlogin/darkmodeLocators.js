class DarkModeLocators {
    get darkModeButton() { return $('//android.widget.TextView[@text="Dark mode"]'); }
    get onButton() { return $('//android.view.ViewGroup[@content-desc="On"]'); }
}
module.exports = new DarkModeLocators();