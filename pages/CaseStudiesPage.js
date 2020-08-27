class CaseStudiesPage {
  //Elements
  get careersBtn() { return $("#menu-item-475 > a"); }

  getTitle() { return browser.getTitle(); }

  goToNextPage() {
    this.careersBtn.waitForDisplayed();
    this.careersBtn.click();
  }
}
module.exports = new CaseStudiesPage();