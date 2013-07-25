// JavaScript Document
var a=1; 
var aaa;
setInterval(asd,2000);

function asd()
{if(!aaa){
aaa=setInterval(f1,1000);}
}

function f1()
{
	if(a>4)
	{
		a=1;
		}
	document.getElementById("abc").style.backgroundImage="url('"+a+".png')";
/*
	if(a==1)
	{	
	document.getElementById("abc").style.backgroundImage="url('1.png')";
	}
	else if(a==2)
	{	
	document.getElementById("abc").style.backgroundImage="url('2.png')";
	}
	else if(a==3)
	{	
	document.getElementById("abc").style.backgroundImage="url('3.png')";
	}
	else if(a==4)
	{	
	document.getElementById("abc").style.backgroundImage="url('4.png')";
	}
	else
	{a=0;}*/
	
		a++;

	}
	
	function fsh1()
	{
		clearInterval(aaa);
		aaa=false;
		
		document.getElementById("abc").style.backgroundImage="url('1.png')";
		//var bbb=setInterval(f1,1000);
		//if(!aaa){
		//var aaa=setInterval(f1,1000);}
}

function fsh2()
	{
		clearInterval(aaa);
		aaa=false;
		//a=2;
		document.getElementById("abc").style.backgroundImage="url('2.png')";
}

function fsh3()
	{
		clearInterval(aaa);
		aaa=false;
		//a=3;	
		document.getElementById("abc").style.backgroundImage="url('3.png')";
}
function fsh4()
	{
		clearInterval(aaa);
		aaa=false;
		//a=4;
		document.getElementById("abc").style.backgroundImage="url('4.png')";
}
/* */