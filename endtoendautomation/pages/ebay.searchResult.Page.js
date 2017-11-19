// ebay result pages objects and functions
module.exports = function(){
  this.searchResult = element(by.xpath("//*[@id='ResultSetItems']"));
  this.selectItemNumber = function(itemNumber){
    element(by.xpath('//*[@id="ResultSetItems"]/ul/li['+ itemNumber +']/*/a')).click();
  }
}
