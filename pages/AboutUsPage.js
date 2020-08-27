class AboutUsPage {
    //Elements
    get whoWeAreBtn() { return $("#menu-item-3241 > a"); }
    get pointDifferentiationBtn() { return $("#menu-item-3242 > a"); }

    getTitle() { return browser.getTitle(); }

    goToNextPage() {
        this.whoWeAreBtn.waitForDisplayed();
        this.whoWeAreBtn.moveTo();
        this.pointDifferentiationBtn.waitForDisplayed();
        this.pointDifferentiationBtn.click();
    }
}
module.exports = new AboutUsPage();