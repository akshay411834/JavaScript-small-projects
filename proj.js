// 
var noti = 0;
var arr = [];
var t = [];
var input = Number(prompt("enter the values to be stored"));

for(let i=0;i<input;i++){
  let chances = input - i;  
t=Number(prompt("enter the elements"+ "chances left are -" + chances));
arr.push(t);
}
arr.sort(function(a,b){
    return a-b;
});
console.log("your input is -" + arr);
console.log("sorted iputs are -"+arr);
var biggest = arr[0];
var smallest = arr[0];
for(let x = 1;x<=arr.length;x++){
if(arr[x]>biggest){
    biggest = arr[x];
} if (arr[x]<smallest){
    smallest = arr[x];
}
}
console.log("biggest -" + biggest);
console.log("smallest -"+ smallest);
