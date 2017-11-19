// ebay product page
module.exports = function(){
  this.addtocartButton = element(by.id('isCartBtn_btn'));
  this.noThanksButton = element(by.xpath("//*[@id='ADDON_0']//button[contains(@class, 'addonnothx')]"));
  this.productName = element(by.xpath('//*[@id="itemTitle"]'));
  this.clickAddtoCartButton = function(){
    this.addtocartButton.click();
  }
  this.clickNoThanksButton = function(){
    this.noThanksButton.click();
  }
}
