class ItNetworkSolPage {

    get whoWeAreBtn() { return $("#menu-item-3241 > a"); }
    get aboutUsBtn() { return $("#menu-item-3243 > a"); }


    getTitle() {
        return browser.getTitle();
    }

    goToNextPage() {
        this.whoWeAreBtn.waitForDisplayed();
        this.whoWeAreBtn.moveTo();
        this.aboutUsBtn.waitForDisplayed();
        this.aboutUsBtn.click();
    }

}

module.exports = new ItNetworkSolPage();