function main(){
var s=document.getElementById("task3").value;
let i=0;
let c=0;
for(i=0;i<s.length-1;i++){
if(s.charAt(i)==s.charAt(i+1)){
c++;
}}
document.getElementById("ar").innerHTML=c+" number of deletion should be performed";
}