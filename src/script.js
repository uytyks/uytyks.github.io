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
    let name = document.getElementById(user_fname);
    alert(name.value);
}
document.getElementById("").addEventListener("click", function(){
    window.alert(document.getElementById("user_fname").value)
    });