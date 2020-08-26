class CusSoftDevPage {
    //Buttons
    get solutionBtn() { return $("#menu-item-3240 > a"); }
    get agentChangeStaffdBtn() { return $("#menu-item-3250 > a"); }


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

module.exports = new CusSoftDevPage();