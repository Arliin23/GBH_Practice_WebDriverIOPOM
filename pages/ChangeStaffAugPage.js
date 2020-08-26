class ChangeStaffAugPage {
    //Buttons
    get solutionBtn() { return $("#menu-item-3240 > a"); }
    get itSupportServicedBtn() { return $("#menu-item-4115 > a"); }
    get itFoundationBtn() {return $('#menu-item-3253 > a');}


    getTitle() {
        return browser.getTitle();
    }

    goToNextPage() {
        this.solutionBtn.waitForDisplayed();
        this.solutionBtn.moveTo();
        this.itSupportServicedBtn.waitForDisplayed();
        this.itSupportServicedBtn.click();
        this.itFoundationBtn.waitForDisplayed();
        this.itFoundationBtn.click();
    }

}

module.exports = new ChangeStaffAugPage();