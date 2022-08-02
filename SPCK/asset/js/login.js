/// INIT
let user = "username";
let pass = "1233";

/// Press button
function login(){
    alert("")
    let userName = document.getElementById("login__username").value;
    let passWord = document.getElementById("login__password").value;
    let msgErr = document.getElementById("msg__err");
    console.log(msgErr);
    if (userName === user && passWord === pass) {
        /// Change location
        window.location.href= "./index.html";
    } else {
        alert('a');
        msgErr.innerHTML="Wrong username or password, try again?";
    }
}