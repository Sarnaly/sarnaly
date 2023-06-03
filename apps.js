var bangla=Number(prompt("Enter Bangla Mark"));
var english=Number(prompt("Enter English Mark"));
var math=Number(prompt("Enter Math Mark"));
var ict=Number(prompt("Enter Ict Mark"));

var obtainmark=bangla+english+math+ict;
if(bangla<33 || english<33 || math<33 || ict<33){
	document.write("F");	
}

else if (obtainmark>=320){
	document.write("A+");
}
else if (obtainmark>=280){
	document.write("A");
} 

else if (obtainmark>=240){
	document.write("A-");
}

else if (obtainmark>=200){
	document.write("B");
}

else if (obtainmark>=160){
	document.write("C");
}

else if (obtainmark>=132){
	document.write("D");
}