
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



function mostrarEmail(){
    document.getElementById("mostrarEmail").innerHTML = `<li class="nav-item" id="mostrarEmail">
    <a class="nav-link active"> ${localStorage.getItem('user')} </a></li>`;
}


function sesionActiva(){
if(localStorage.getItem('user')){
    mostrarEmail();
}
else{
    document.getElementById("mostrarEmail").innerHTML = `<a class="nav-link active" href="login.html">Login</a>`;
}
};


function cerrarSesion(){
localStorage.removeItem('user');
}


sesionActiva();