
function main(){
    // alert("hello");
var r=document.getElementById("task1").value;
console.log(r);
var s=r.toLowerCase();
var c2=0;
for(var i=0;i<26;i++)
{
 var c=0;
for(var j=0;j<s.length;j++)
{
 
  if((s.charAt(j)).toString()==((10+i).toString(36)))
  {
    c++;
  }
}
if(c!=0)
{
c2++;
}

}
if(c2==26)
document.getElementById("ar").innerHTML="pangram";
else 
document.getElementById("ar").innerHTML=" not_pangram";
}