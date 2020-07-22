function validateName()
{
    var name=document.getElementById("name").value;
    var rel=/^[a-zA-Z\s\'\-]{2,30}$/;

    if(rel.test(name))
    {
        document.getElementById("messageName").style.color = "green";
        document.getElementById("messageName").innerHTML="Valid";
        return true;
    }
    else
    {
        document.getElementById("messageName").style.color ="Red";
        document.getElementById("messageName").innerHTML="Invalid";
        return false;
    }

}
function validateEmail()
{
    var mail = document.getElementById("email").value;
    var rel = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(rel.test(mail))
    {
        document.getElementById("messageEmail").style.color = "green";
        document.getElementById("messageEmail").innerHTML ="Valid";
        return true;
    }
    else
    {
        document.getElementById("messageEmail").style.color = "Red";
        document.getElementById("messageEmail").innerHTML = "Invalid";
        return false;
    }
}

function validateUsername()
{
    var username = document.getElementById("username").value;
    var rel=/^[a-zA-Z0-9]{2,10}$/;

    if(rel.test(username))
    {
        document.getElementById("messageUser").style.color = "green";
        document.getElementById("messageUser").innerHTML ="Valid";
        return true;
    }
    else
    {
        document.getElementById("messageUser").style.color = "Red";
        document.getElementById("messageUser").innerHTML = "Invalid";
        return false;
    }
}
function validatePassword()
{
    var pass = document.getElementById("password").value;
    var rel=/^[a-zA-Z0-9]{2,10}$/;

    if(rel.test(pass))
    {
        document.getElementById("messagePass").style.color = "green";
        document.getElementById("messagePass").innerHTML ="Valid";
        return true;
    }
    else
    {
        document.getElementById("messagePass").style.color = "Red";
        document.getElementById("messagePass").innerHTML = "Invalid";
        return false;
    }
}
function validateConfirm()
{
    var confirm = document.getElementById("confirmpass").value;
    var pass = document.getElementById("password").value;

    if(confirm === pass)
    {
        document.getElementById("messageConfirm").style.color = "green";
        document.getElementById("messageConfirm").innerHTML ="Valid";
        return true;
    }
    else
    {
        document.getElementById("messageConfirm").style.color = "Red";
        document.getElementById("messageConfirm").innerHTML = "Invalid";
        return false;
    }
}
function register() {
    if (validateConfirm() && validatePassword() && validateUsername() && validateEmail() && validateName()) {
        alert("Registration successful !!");
    }
    else {
        alert("Invalid field!!");
    }
}
