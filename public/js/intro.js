function postName()
{
    var uname = document.getElementById("username").value;
    if(uname.length <= 0)
    {
        document.getElementById("error_out").innerHTML = "Please enter a name";
    }
    else
    {
        window.location = "/" + uname;
    }
}

function postAge()
{
    var uname = document.getElementById("username").value;
    var uage = document.getElementById("age").value;
    if(isNaN(parseInt(uage)) && uage < 0)
    {
        document.getElementById("error_out").innerHTML = "Please input a valid age";
    }
    else
    {
        window.location = "/" + uname + "/" + uage;
    }
}