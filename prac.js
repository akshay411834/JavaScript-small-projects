var bo = document.querySelector("#box");
var ba = document.querySelector("#bar");
var bt = document.querySelector("#btn");
var disp = document.querySelector("h1");

var a = 0;
var interval = null;
bt.addEventListener('click',function(){
   
   interval =setInterval(function(){
        a++;
    ba.style.width = a+"%";
console.log(a);
disp.innerHTML=a + "%";
    
if(a==100){
    clearInterval(interval);
    console.log("download completed");
}
   },300)
});