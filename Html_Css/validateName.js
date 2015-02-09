function validateName()
{

//Name can have [a-z 0-9] of length [4-15]
	var obj = document.getElementById("name").value;
	if(/^[a-z\s]{3,15}$/i.test(obj))
	{
		document.getElementById("name1").setAttribute("class","glyphicon glyphicon-thumbs-up");

		isName=1;
	}
	else
	{ 
		isName=0;
document.getElementById("name1").setAttribute("class","glyphicon glyphicon-remove");	
}
}
// Username can have [a-z 0-9 _ @] only and can only start with [a-z] of length [4-15]
function validateUsername()
{
	var obj = document.getElementById("uname").value;
	if(/^[a-z0-9_@][a-z0-9_@]{4,15}$/i.test(obj))
	{
		document.getElementById("name2").setAttribute("class","glyphicon glyphicon-thumbs-up");
		isUname=1;
	}
	else
	{
		isUname =0;
document.getElementById("name2").setAttribute("class","glyphicon glyphicon-remove");	
}
}

