let homepage= function(){
//we will add all object locators and functions
 let num1_input=   element(by.model('first'));
 let num2_input=   element(by.model('second'));
 let gobutton= element(by.css('[ng-click="doAddition()"]'));

 this.get= function(url){
browser.get(url);
 };
 this.enternum1= function(no1){
    num1_input.sendKeys(no1);
};
this.enternum2= function(no2){
    num2_input.sendKeys(no2);
}
this.clickGo=function(){
   gobutton.click();
};


this.verifyResult= function(result){
 
   let output= element(by.cssContainingText('.ng-binding', result)); 
   expect(output.getText()).toEqual(result); 
}



};
module.exports= new homepage();//this variable can be refferd to another files