const homepage = require("../pages/HomePage");
const innovationsquad = require("../pages/InnovationSquadPage");

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

});