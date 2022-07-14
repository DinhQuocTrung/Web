/// Press button
function login(){
    let userName = document.getElementById("user__name").value;
    let passWord = document.getElementById("pass__word").value;
    // console.log(msgErr);
    if (userName === "Trung" && passWord === "1233") {
        /// Change location
        window.location.href= "./index.html";
    } else {
        var tag = document.createElement("p"); // <p></p>
        var text = document.createTextNode("Wrong"); 
        tag.appendChild(text);
        var element = document.getElementsByTagName("body")[0];
        element.appendChild(tag);
    }
}