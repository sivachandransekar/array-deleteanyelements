var arrlength=prompt("Enter the length of array");
var a=[];
for(let i=0;i<arrlength;i++){
	a[i]=prompt("Enter the"+(i+1)+"value");
}
document.write("a="+a+"<br>"+"<br>");
var b=prompt("Enter the position of elements you delete");
var del=prompt("Enter the how many elements you delete");
var c=a.splice(b,del);
document.write("delete the elements"+a);