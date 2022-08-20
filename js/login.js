
function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}



function validacion(){
    const pass = document.getElementById("form2Example2");
    const email = document.getElementById("form2Example1");
    
    if (email.value.length > 0 && pass.value.length > 0){
        window.location="index.html";
    }
    else{
        showAlertError();
    };
}


const button = document.getElementById("buttonIniciar");
button.onclick = validacion;