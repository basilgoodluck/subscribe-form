var nameError = document.getElementById("nameError")



function validate(){
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
    }
}