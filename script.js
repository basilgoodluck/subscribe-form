const fName = document.getElementById("fName")


const validate = function (fName) {
    fName.addEventListener("keyup", ()=>{
        if(fName.match(/[0-9]/)){
            (fName.value).style.color = "red"       
        }
    })
}