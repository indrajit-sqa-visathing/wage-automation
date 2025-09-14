class HomeScreenButtonsLocators {
    
    get completeProfileButton() { 
        return $('(//android.widget.TextView[@text="Bangladesh"])[1]');
    }

    get jobSeeAllButton() { 
        return $('//android.widget.TextView[@text="See all"]');
    }

    get courseSeeAllButton() { 
        return $('(//android.widget.TextView[@text="See all"])[2]');
    }

}
module.exports = new HomeScreenButtonsLocators();