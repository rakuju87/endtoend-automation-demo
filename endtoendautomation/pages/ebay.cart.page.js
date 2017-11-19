// ebay cart page
module.exports = function(){
  this.cartPageHeader = element(by.xpath('//*[@id="PageTitle"]/h1'));
  this.cartItemValidation = function(item){
    this.cartItem = element(by.xpath('//*[@id="ShopCart"]//a[contains(text(),"'+ item + '")]'));
    return this.cartItem.isPresent();
  }
}
