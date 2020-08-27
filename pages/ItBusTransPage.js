class ItBusTransPage {
    //Elements
    get solutionBtn() { return $("#menu-item-3240 > a"); }
    get customsoftDevdBtn() { return $("#menu-item-3249 > a"); }

    getTitle() { return browser.getTitle(); }

    goToNextPage() {
        this.solutionBtn.waitForDisplayed();
        this.solutionBtn.moveTo();
        this.customsoftDevdBtn.waitForDisplayed();
        this.customsoftDevdBtn.click();
    }
}
module.exports = new ItBusTransPage();