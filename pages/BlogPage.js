class BlogPage {
    //Elements
    get caseStudiesBtn() { return $("#menu-item-353 > a"); }

    getTitle() { return browser.getTitle(); }

    goToNextPage() {
        this.caseStudiesBtn.waitForDisplayed();
        this.caseStudiesBtn.click();
    }
}
module.exports = new BlogPage();