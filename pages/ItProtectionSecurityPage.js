class ItProtectionSecurityPage {
    //Elements
    get solutionBtn() { return $("#menu-item-3240 > a"); }
    get itSupportServicedBtn() { return $("#menu-item-4115 > a"); }
    get compareProductsBtn() { return $('#menu-item-3255 > a'); }

    getTitle() { return browser.getTitle(); }

    goToNextPage() {
        this.solutionBtn.waitForDisplayed();
        this.solutionBtn.moveTo();
        this.itSupportServicedBtn.waitForDisplayed();
        this.itSupportServicedBtn.click();
        this.compareProductsBtn.waitForDisplayed();
        this.compareProductsBtn.click();
    }
}
module.exports = new ItProtectionSecurityPage();