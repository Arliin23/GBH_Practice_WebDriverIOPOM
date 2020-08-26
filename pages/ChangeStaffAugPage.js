class ChangeStaffAugPage {
    //Buttons
    get solutionBtn() { return $("#menu-item-3240 > a"); }
    get itSupportServicedBtn() { return $("#menu-item-4115 > a"); }
    get itFoundationBtn() {return $('');}


    getTitle() {
        return browser.getTitle();
    }

    goToNextPage() {
        this.solutionBtn.waitForDisplayed();
        this.solutionBtn.moveTo();
        this.agentChangeStaffdBtn.waitForDisplayed();
        this.agentChangeStaffdBtn.click();

    }

}

module.exports = new ChangeStaffAugPage();