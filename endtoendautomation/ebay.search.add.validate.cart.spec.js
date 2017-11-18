var ebayHomePage = require('./pages/ebay.homepage.js'),
    searchResultPage = require('./pages/ebay.searchResult.Page.js');
describe('Search 2 products then add them and validate cart',function(){
  var EbayHomePage = new ebayHomePage(),
      SearchResultPage = new searchResultPage();
    beforeAll(function(){
      browser.get('https://www.ebay.com.au/');
      expect(browser.getCurrentUrl()).toMatch('ebay.com.au');
    });

  describe('When the ebay site is loaded', function(){
    it('Should search product in ebay site', function(){
      EbayHomePage.setSearchInputBox('bose QC35 ii');
      expect(EbayHomePage.searchInputBox.getAttribute('value')).toMatch('bose QC35 ii');
    });
  });

  describe('When the product to be searched is set', function(){
    it('Should click on search button', function(){
      EbayHomePage.clickSearchButton();
      expect(SearchResultPage.searchResult.isPresent()).toBeFalsy;
    });
  });
});
