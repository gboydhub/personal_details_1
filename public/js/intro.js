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

function postNums()
{
    var uname = document.getElementById("username").value;
    var uage = document.getElementById("age").value;

    var numA = document.getElementById("num_1").value;
    var numB = document.getElementById("num_2").value;
    var numC = document.getElementById("num_3").value;

    window.location = "/" + uname + "/" + uage +
            "/" + numA + "/" + numB + "/" + numC;
}