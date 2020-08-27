class PointDifferentiationPage {
    //Elements
    get whoWeAreBtn() { return $("#menu-item-3241 > a"); }
    get blogBtn() { return $("#menu-item-4661 > a"); }
    getTitle() {
        return browser.getTitle();
    }

    goToNextPage() {
        this.whoWeAreBtn.waitForDisplayed();
        this.whoWeAreBtn.moveTo();
        this.blogBtn.waitForDisplayed();
        this.blogBtn.click();
    }
}

module.exports = new PointDifferentiationPage();