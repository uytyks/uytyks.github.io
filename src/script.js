function notNull(value){
    if(value == null) return false;
    return (value.length > 0);
}
function isEmail(email) {
    let regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(com|net|org|edu|gov|dev)$/;
    return regex.test(String(email).toLowerCase());
   }
function isPhoneNum(num) {
    let regex = /^\d{3}-\d{3}-\d{4}$/;
    return regex.test(String(num).toLowerCase());
}
function validate(){
    let fname = document.getElementById("user_fname").value;
    let lname = document.getElementById("user_lname").value;
    let area = document.getElementById("user_message").value;
    let email = document.getElementById("user_email").value;
    let num = document.getElementById("user_phone").value;
    let emsg = "";
    if (!notNull(fname)){
        emsg += "Please Enter a First Name<br>";
    }
    if (!notNull(lname)){
        emsg += "Please Enter a Last Name<br>";
    }
    if (!isEmail(email)){
        emsg += "Invalid Email Format<br>";
    }
    if (!isPhoneNum(num)){
        emsg += "Invalid Phone Number<br>";
    }
    if (!notNull(area)){
        emsg += "Please Enter a Message<br>";
    }
    document.getElementById("error").innerHTML = emsg;
}
document.getElementById("submit").addEventListener("click", validate);
