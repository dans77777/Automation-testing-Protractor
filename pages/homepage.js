let homepage= function(){
//we will add all object locators and functions
 let num1_input=   element(by.model('first'));
 let num2_input=   element(by.model('second'));
 let gobutton= element(by.css('[ng-click="doAddition()"]'));

 this.get= function(url){
browser.get(url);
 };
 


};
module.exports= new homepage();//this variable can be refferd to another files