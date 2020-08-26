const homepage = require("../pages/HomePage");
const innovationSquad = require("../pages/InnovationSquadPage");
const itBusTrans = require("../pages/ItBusTransPage");
const customSoftware = require("../pages/CusSoftDevPage");
const changeStaffAug = require("../pages/ChangeStaffAugPage");
const itFoundation = require("../pages/ItFoundationPage");
const itProtectionSecurity = require("../pages/ItProtectionSecurityPage");
const itSupportService = require("../pages/ItSupportService");
const itNetworkSolPage = require("../pages/ItNetworkSolPage");

const { assert } = require("chai");

describe("Verifing links on the navigation bar", ()=>{

it("Verify that you are in the homepage and go to Innovation Squad Page", ()=>{

browser.url("/");
assert.equal(homepage.getTitle(), 'GBH');
homepage.goToNextPage();
});

it("Verify that you are in the Innovation Squad page and go to IT Business Transformation Page",()=>{
    assert.equal(innovationSquad.getTitle(), 'Innovation Squad');
    innovationSquad.goToNextPage();
});

it("Verify that you are in the IT Business Transformation Page and go to Custom Software Development Page",()=>{
    assert.equal(itBusTrans.getTitle(), 'VCIO');
    itBusTrans.goToNextPage();
});

it("Verify that you are in the Custom Software Development Page and go to Agent of Change Staff Augmentation Page",()=>{
    assert.equal(customSoftware.getTitle(), 'Custom Software Development');
    customSoftware.goToNextPage();
});

it("Verify that you are in the Agent of Change Staff Augmentation Page and go to IT Foundation Page",()=>{
    assert.equal(changeStaffAug.getTitle(), 'Staff Augmentation');
    changeStaffAug.goToNextPage();
});

it("Verify that you are in the IT Foundation Page and go to IT Protection and Security Page",()=>{
    assert.equal(itFoundation.getTitle(), 'IT Essentials');
    itFoundation.goToNextPage();
});

it("Verify that you are in the IT Protection and Security Page and go to Compare Products Page",()=>{
    assert.equal(itProtectionSecurity .getTitle(), 'IT Protection & Support');
    itProtectionSecurity.goToNextPage();
});

it("Verify that you are in the IT Support Service Page and go to IT Network Solutions Page",()=>{
    assert.equal(itSupportService.getTitle(), 'IT Support Service');
    itSupportService.goToNextPage();
});

it("Verify that you are in the IT Network Solutions Page and go to About Us Page",()=>{
    assert.equal(itNetworkSolPage.getTitle(), 'Network Solutions');
    itNetworkSolPage.goToNextPage();
});

});