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