var productList = require('../InputData/ProductList.js');
var using = require('/Users/kujurra_local/node_modules/jasmine-data-provider');
var ebayHomePage = require('../pages/ebay.homepage.js'),
    searchResultPage = require('../pages/ebay.searchResult.Page.js');
    productPage = require('../pages/ebay.product.page.js');
    cartPage = require('../pages/ebay.cart.page.js');
    EC = protractor.ExpectedConditions;
using(productList.ProductInfo, function (data, description) {
  describe('Search '+ description + ' product then add them and validate cart',function(){
    var EbayHomePage = new ebayHomePage(),
        SearchResultPage = new searchResultPage();
        ProductPage = new productPage();
        CartPage = new cartPage();
      beforeAll(function(){
        browser.get('https://www.ebay.com.au/');
        expect(browser.getCurrentUrl()).toMatch('ebay.com.au');
      });

    describe('When the ebay site is loaded', function(){
      it('Should search product in ebay site', function(){
        EbayHomePage.setSearchInputBox(data.productName);
        expect(EbayHomePage.searchInputBox.getAttribute('value')).toMatch(data.productName);
      });
    });

    describe('When the product to be searched is set', function(){
      it('Should click on search button', function(){
        EbayHomePage.clickSearchButton();
        browser.wait(EC.presenceOf(SearchResultPage.searchResult), 5000);
        expect(SearchResultPage.searchResult.isPresent()).toBeTruthy;
      });
    });

    describe('When the product is searched', function(){
      it('Should select the first product', function(){
        SearchResultPage.selectItemNumber(data.itemNumber);
        browser.wait(EC.presenceOf(ProductPage.productName), 5000);
        expect(ProductPage.productName.getText()).toMatch(data.productName);
      });
    });

    describe('When the product is selected', function(){
      it('Should add to cart', function(){
        ProductPage.clickAddtoCartButton();
        browser.wait(EC.presenceOf(ProductPage.noThanksButton), 5000);
        ProductPage.clickNoThanksButton();
        browser.wait(EC.presenceOf(CartPage.cartPageHeader), 5000);
        expect(CartPage.cartPageHeader.isPresent()).toBeTruthy;
      });
    });

    describe('When the product is added to cart', function(){
      it('Validate if item is present', function(){
        expect(CartPage.cartItemValidation(data.productName)).toBeTruthy;
      });
    });
  });
});
