class ItSupportService {
    //Buttons
    get solutionBtn() { return $("#menu-item-3240 > a"); }
    get itNetworkSolutionsdBtn() { return $("#menu-item-3252 > a"); }

    getTitle() {
        return browser.getTitle();
    }

    goToNextPage() {
        this.solutionBtn.waitForDisplayed();
        this.solutionBtn.moveTo();
        this.itNetworkSolutionsdBtn.waitForDisplayed();
        this.itNetworkSolutionsdBtn.click();
    }

}

module.exports = new ItSupportService();