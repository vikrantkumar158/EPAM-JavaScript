var attempts = 3;

function validateForm(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username === "Demo" && password === "demo123"){
        alert ("Login successfully");
        return false;
    }
    else{
        attempts --;
        alert("Invalid Login, You have left "+attempts+" attempt;");
        document.getElementById("note").innerHTML="<b>Try</b><br><b>Username: </b><em>Demo</em><br><b>Password: </b><em>demo123</em>"
        if( attempts === 0){
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("signin").disabled = true;
            return false;
        }
    }
}
