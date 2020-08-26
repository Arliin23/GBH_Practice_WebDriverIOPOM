const homepage = require("../pages/HomePage");
const innovationsquad = require("../pages/InnovationSquadPage");
const itbustrans = require("../pages/ItBusTransPage");
const customsoftware = require("../pages/CusSoftDevPage");
const changestaffaug = require("../pages/ChangeStaffAugPage");
const { assert } = require("chai");


describe("Verifing links on the navigation bar", ()=>{

it("Verify that you are in homepage and go to Innovation Squad Page", ()=>{

browser.url("/");
assert.equal(homepage.getTitle(), 'GBH');
homepage.goToNextPage();

});

it("Verify that you are in Innovation Squad page and go to IT Business Transformation Page",()=>{

    assert.equal(innovationsquad.getTitle(), 'Innovation Squad');
    innovationsquad.goToNextPage();
});

it("Verify that you are in IT Business Transformation Page and go to Custom Software Development Page",()=>{

    assert.equal(itbustrans.getTitle(), 'VCIO');
    itbustrans.goToNextPage();
});

it("Verify that you are in Custom Software Development Page and go to Agent of Change Staff Augmentation Page",()=>{

    assert.equal(customsoftware.getTitle(), 'Custom Software Development');
    customsoftware.goToNextPage();
 
});

it.skip("",()=>{

    assert.equal(changestaffaug.getTitle(), 'VCIO');
    customsoftware.goToNextPage();

});


});