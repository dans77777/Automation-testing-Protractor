let homepage= require('../pages/homepage');

describe ('demo calculator testing', function()//it is testsuit
{
it('addition test',function()//test for addition --use protractor API to see locators syntax
{
  //  browser.get('http://juliemr.github.io/protractor-demo/');//get website to test
homepage.get('http://juliemr.github.io/protractor-demo/');
// element(by.model('first')).sendKeys('6');//by default values
// element(by.model('second')).sendKeys('4');
//    element(by.css('[ng-click="doAddition()"]')).click();//clicks on the button
//    let result= element(by.cssContainingText('.ng-binding', '10')); 
//    expect(result.getText()).toEqual('10'); 
   //to see shortcuts to use protractor snippets use vscode protractor snippets 


it('subtraction test',function()//protractor API have classess and locators to use
{
 
});

                                      
})});