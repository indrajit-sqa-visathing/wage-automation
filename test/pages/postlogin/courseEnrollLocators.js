class CoursEnrollLocators {
    courseEnrollButton(number) { 
        return $(`(//android.widget.TextView[@text="offline"])[${number}]`);
    }

    get enrollButton(){
        return $('//android.widget.TextView[@text="Enroll"]');
    }

    get yesButton(){
        return $('//android.widget.Button[@resource-id="android:id/button1"]');
    }
}
module.exports = new CoursEnrollLocators();