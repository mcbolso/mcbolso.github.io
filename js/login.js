
function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}



function validacion(){
    const pass = document.getElementById("form2Example2");
    const email = document.getElementById("form2Example1");
    
    if (email.value.length > 0 && pass.value.length > 0){
        localStorage.setItem('user', document.getElementById("form2Example1").value);
        window.location="index.html";
    }
    else{
        showAlertError();
    };
}


const button = document.getElementById("buttonIniciar");
button.onclick = validacion;


// document.getElementById("buttonIniciar").addEventListener("click", () => {
//    localStorage.setItem('user', document.getElementById("form2Example1").value);
//    localStorage.getItem('user';)
//})