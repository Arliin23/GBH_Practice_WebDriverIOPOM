class InnovationSquadPage {

    //Buttons
    get solutionBtn() { return $("#menu-item-3240 > a"); }
    get itBusinessBtn() { return $("#menu-item-3247 > a"); }

    getTitle() {
        return browser.getTitle();
    }

    goToNextPage() {
        this.solutionBtn.waitForDisplayed();
        this.solutionBtn.moveTo();
        this.itBusinessBtn.waitForDisplayed();
        this.itBusinessBtn.click();

    }

}

module.exports = new InnovationSquadPage();