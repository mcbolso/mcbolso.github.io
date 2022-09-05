document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});



function mostrarEmail(){
        document.getElementById("mostrarEmail").innerHTML = `<li class="nav-item" id="mostrarEmail">
        <a class="nav-link active"> ${localStorage.getItem('user')} </a>
      </li>`;
}


function sesionActiva(){
    if(localStorage.getItem('user')){
        mostrarEmail();
    }
    else{
        document.getElementById("mostrarEmail").innerHTML = `<a class="nav-link active" href="login.html">Login</a>`;
    }
};


sesionActiva();