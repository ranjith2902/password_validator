function matchPassword(){
    let pw1 = document.getElementById("pswd1").value;
    let pw2 = document.getElementById("pswd2").value;
    console.log(pw1,pw2);
    let message = document.getElementById("message");

    if(pw1.length !=0) {
    if(pw1 != pw2)
    {
        message.textContent = "password didn't match. password validation unsucessful";
        message.style.backgroundColor = "#ff0000";

    } else {
        message.textContent = "password matched. password validation Sucessful.";
        message.style.backgroundColor = "#00ff00";
    } 
}  else {
    alert("Password can't be empty");
    message.textContent = "";
}
}