class BottomNavigationLocators {
    get okayButton() { return $('//android.view.ViewGroup[@content-desc="Ok"]'); }
    get homeButton() { return $('//android.widget.Button[@content-desc="Home"]'); }
    get jobButton() { return $('//android.widget.Button[@content-desc="Job"]'); }
    get courseButton() { return $('//android.widget.Button[@content-desc="Course"]'); }
    get profileButton() { return $('//android.widget.Button[@content-desc="Profile"]'); }
}
module.exports = new BottomNavigationLocators();