var nameError = document.getElementById("nameError")



function validateName(){
    let name = document.getElementById("fName")
    if (name.value == ""){
        name.classList.add("error");
        name.classList.remove("correct")
        return false
    }
    else if(!name.value.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        name.classList.add("error");
        name.classList.remove("correct")
        return false
    }
    else{
        name.classList.add("correct")
        return true
    }
}
function validateEmail(){
    let email = document.getElementById("email")
    if (email.value == ""){
        email.classList.add("error");
        email.classList.remove("correct")
        return false
    }
    else if(!email.value.match(/^[A-Za-z]\._\[0-9]*[A-Za-z]*[\.][a-z]{2,4}$/)){
        email.classList.add("error");
        email.classList.remove("correct")
        return false
    }
    else{
        email.classList.add("correct")
        return true
    }
}
function validatePhone(){
    let phone = document.getElementById("phoneNumber")
    if (phone.value == ""){
        phone.classList.add("error");
        phone.classList.remove("correct")
        return false
    }
    else if(!phone.value.match(/^[0-9]{11}$/)){
        phone.classList.add("error");
        phone.classList.remove("correct")
        return false
    }
    else{
        phone.classList.add("correct")
        return true
    }
}