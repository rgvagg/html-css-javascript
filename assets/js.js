// JavaScript Document
var a,b=300,c=10,d,x;
//a=1100;
a=1000;
function func1()
{	//start:
		a-=5;
	//document.write(a+b+c);
		//document.getElementById("temp").style.borderRadius=b+"px";
	document.getElementById("temp").style.width=(a+"px");
	//document.getElementById("temp1").style.display="block";	
	//document.getElementById("temp").color.rgb=(100, 500, 900);
	document.getElementById("temp").style.opacity=(a*0.001);
	//document.getElementById("temp").innerHTML=("<p>"+a+"</p>");
	if(a<300)
	{	
		document.getElementById("temp").style.display="none";

	//a+=5;
	//document.getElementById("temp").style.background="cyan";
	//document.getElementById("temp").style.width=(a+"px");
	//document.getElementById("temp").style.opacity=(a*0.001);


	document.getElementById("temp1").style.display="block";
	//a=a+10;	
	b+=5;
	document.getElementById("temp1").style.width=(b+"px");
	document.getElementById("temp1").style.opacity=(b*0.001);

	if(b>1000)
	{	document.getElementById("temp1").style.display="none";
	//a=1100;
	//repeat: goto start;
	
	//document.getElementById("temp").style.width=(a+"px");
		//document.getElementById("temp").style.opacity=(a*0.001);


		//a=1100;func1();
		}
		//if(a>=1100)
		//{break;}
	}

	//func1();
}

function f3()
{	
	x=setInterval(func1,10);
	}
	
function f2()
{
	clearInterval(x);
	//document.getElementById("temp").style.display="none";
}
