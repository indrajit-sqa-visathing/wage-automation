class HomeScreenButtonsLocators {
    
    get completeProfileButton() { 
        return $('//android.view.ViewGroup[@content-desc="1%, Test User, Let’s Complete Your Profile!, Bangladesh"]');
    }

    get jobSeeAllButton() { 
        return $('//android.widget.TextView[@text="See all"]');
    }

    get courseSeeAllButton() { 
        return $('(//android.widget.TextView[@text="See all"])[2]');
    }

}
module.exports = new HomeScreenButtonsLocators();