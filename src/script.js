function notNull(value){
    if(value == null) return false;
    return (value.length > 0);
}
function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{2,}[a-zA-Z0-9])?)*$/;
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
    if (!notNull(fname)){
        document.write("Null First Name");
    }
    if (!notNull(lname)){
        document.write("Null Last Name");
    }
    if (!notNull(area)){
        alert("Invalid Message");
    }
    if (!isEmail(email)){
        alert("Invalid Email Format");
    }
    if (!isPhoneNum(num)){
        alert("Invalid Phone Number");
    }
}
document.getElementById("submit").addEventListener("click", validate);
