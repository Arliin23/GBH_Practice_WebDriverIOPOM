class ItFoundationPage {

 //Buttons
 get solutionBtn() { return $("#menu-item-3240 > a"); }
 get itSupportServicedBtn() { return $("#menu-item-4115 > a"); }
 get itProtectionSecurityBtn() {return $('#menu-item-3254 > a');}


 getTitle() {
     return browser.getTitle();
 }

 goToNextPage() {
     this.solutionBtn.waitForDisplayed();
     this.solutionBtn.moveTo();
     this.itSupportServicedBtn.waitForDisplayed();
     this.itSupportServicedBtn.click();
     this.itProtectionSecurityBtn.waitForDisplayed();
     this.itProtectionSecurityBtn.click();
 }

}

module.exports = new ItFoundationPage();