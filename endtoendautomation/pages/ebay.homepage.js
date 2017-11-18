module.exports = function(){
  this.searchInputBox = element(by.id('gh-ac'));
  this.searchButton = element(by.id('gh-btn'));

  this.setSearchInputBox = function(productName){
    this.searchInputBox.sendKeys(productName);
  }
  this.clickSearchButton = function(){
    this.searchButton.click();
  }
}
