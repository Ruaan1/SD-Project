function password_validation(){
    if(document.form1.Password.value.length < 8){
        document.getElementById("result").style.visibility = "visible";
        document.getElementById("result").innerHTML = "Password needs to be at least 8 digits";
        return false;
    }
    else if(document.form1.Password.value !== document.form1.cPassword.value){
        document.getElementById("result").style.visibility = "visible";
        document.getElementById("result").innerHTML = "Password does not match";
        return false;
    }
}