const homepage = require("../pages/HomePage");
const innovationSquad = require("../pages/InnovationSquadPage");
const itBusTrans = require("../pages/ItBusTransPage");
const customSoftware = require("../pages/CusSoftDevPage");
const changeStaffAug = require("../pages/ChangeStaffAugPage");
const itFoundation = require("../pages/ItFoundationPage");
const itProtectionSecurity = require("../pages/ItProtectionSecurityPage");
const itSupportService = require("../pages/ItSupportService");
const itNetworkSolPage = require("../pages/ItNetworkSolPage");
const aboutUs = require("../pages/AboutUsPage");
const pointDifferentiation = require("../pages/PointDifferentiationPage");
const blog = require("../pages/BlogPage");
const caseStudies = require("../pages/CaseStudiesPage");
const careers = require("../pages/CareersPage");
const { assert } = require("chai");

describe("Verifing links on the navigation bar", () => {

    it("Verify that you are in the homepage and go to Innovation Squad Page", () => {
        browser.url("/");
        assert.equal(homepage.getTitle(), 'GBH');
        homepage.goToNextPage();
    });

    it("Verify that you are in the Innovation Squad page and go to IT Business Transformation Page", () => {
        assert.equal(innovationSquad.getTitle(), 'Innovation Squad');
        innovationSquad.goToNextPage();
    });

    it("Verify that you are in the IT Business Transformation Page and go to Custom Software Development Page", () => {
        assert.equal(itBusTrans.getTitle(), 'VCIO');
        itBusTrans.goToNextPage();
    });

    it("Verify that you are in the Custom Software Development Page and go to Agent of Change Staff Augmentation Page", () => {
        assert.equal(customSoftware.getTitle(), 'Custom Software Development');
        customSoftware.goToNextPage();
    });

    it("Verify that you are in the Agent of Change Staff Augmentation Page and go to IT Foundation Page", () => {
        assert.equal(changeStaffAug.getTitle(), 'Staff Augmentation');
        changeStaffAug.goToNextPage();
    });

    it("Verify that you are in the IT Foundation Page and go to IT Protection and Security Page", () => {
        assert.equal(itFoundation.getTitle(), 'IT Essentials');
        itFoundation.goToNextPage();
    });

    it("Verify that you are in the IT Protection and Security Page and go to IT Support Service Page ", () => {
        assert.equal(itProtectionSecurity.getTitle(), 'IT Protection & Support');
        itProtectionSecurity.goToNextPage();
    });

    it("Verify that you are in the IT Support Service Page and go to IT Network Solutions Page", () => {
        assert.equal(itSupportService.getTitle(), 'IT Support Service');
        itSupportService.goToNextPage();
    });

    it("Verify that you are in the IT Network Solutions Page and go to About Us Page", () => {
        assert.equal(itNetworkSolPage.getTitle(), 'Network Solutions');
        itNetworkSolPage.goToNextPage();
    });

    it("Verify that you are in the About Us Page and go to Point of differentiation Page", () => {
        assert.equal(aboutUs.getTitle(), 'About us');
        aboutUs.goToNextPage();
    });

    it("Verify that you are in the Point of differentiation Page and go to Blog Page", () => {
        assert.equal(pointDifferentiation.getTitle(), 'Point Of Differentiation');
        pointDifferentiation.goToNextPage();
    });

    it("Verify that you are in the Blog Page and go to Case Studies Page", () => {
        assert.equal(blog.getTitle(), 'Blog');
        blog.goToNextPage();
    });

    it("Verify that you are in the Case Studies Page and go to Careers Page", () => {
        assert.equal(caseStudies.getTitle(), 'Case Studies');
        caseStudies.goToNextPage();
    });

    it("Verify that you are in the Careers Page", () => {
        assert.equal(careers.getTitle(), 'Careers');
    });

});