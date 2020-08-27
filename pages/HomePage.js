class HomePage {
    //Buttons
    get solutionBtn() { return $("#menu-item-3240 > a"); }
    get innovationSquadBtn() { return $("#menu-item-3248 > a"); }

    getTitle() { return browser.getTitle(); }

    goToNextPage() {
        this.solutionBtn.waitForDisplayed();
        this.solutionBtn.moveTo();
        this.innovationSquadBtn.waitForDisplayed();
        this.innovationSquadBtn.click();
    }
}
module.exports = new HomePage();