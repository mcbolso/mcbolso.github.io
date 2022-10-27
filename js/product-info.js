

document.addEventListener("DOMContentLoaded", function () {
    //fetch de productos
    fetch(PRODUCT_INFO_URL + localStorage.getItem("prodID") + EXT_TYPE)
        .then(respuesta => respuesta.json())
        .then(data => {

            document.getElementById("titulo").innerHTML = data.name;
            document.getElementById("categorias").innerHTML = data.category;
            document.getElementById("descripcion").innerHTML = data.description;
            document.getElementById("precio").innerHTML = data.currency + data.cost;
            document.getElementById("vendidos").innerHTML = data.soldCount;

            for (i = 0; i < data.images.length; i++) {
                document.getElementById("imagenes").innerHTML += `<img src="${data.images[i]}" class="m-3" style="width:20%;border: solid 1.5px grey;"></img> `


            }


            for (i = 0; i<data.relatedProducts.length; i++){
                document.getElementById("productosRelacionados").innerHTML += `<div class="col-5" <p> ${data.relatedProducts[i].name} </p>
                <img src="${data.relatedProducts[i].image}" onclick="setProdID(${data.relatedProducts[i].id})" style="width: 19rem">
                </div>`
                
                
            }
            //cargo los productos relacionados
            //document.getElementById("productosRelacionados").innerHTML += `<div class="col-5" <p> ${data.relatedProducts[0].name} </p>
            //<img src="${data.relatedProducts[0].image}" onclick="setProdID(${data.relatedProducts[0].id})" style="width: 19rem">
            //</div>`


            //document.getElementById("productosRelacionados").innerHTML += `<div class="col-5" <p> ${data.relatedProducts[0].name} </p>
            //<img src="${data.relatedProducts[0].image}" onclick="setProdID(${data.relatedProducts[1].id})" style="width: 19rem">
            //</div>`


        })



});

fetch(PRODUCT_INFO_COMMENTS_URL + localStorage.getItem("prodID") + EXT_TYPE)
    .then(respuesta => respuesta.json())
    .then(data => {

        for (let comentario of data) {
            document.getElementById("comentarios").innerHTML += `<div class="list-group-item">
            <div class="row">
            <div class="col-12">
            <strong>${comentario.user}</strong> - ${comentario.dateTime} - ${mostrarEstrellas(comentario.score)}
            <p>${comentario.description}</p>
            </div>
            </div>
            </div>`

        }

    })



function mostrarEstrellas(cantidad) {

    let starsHTML = "";

    for (i = 0; i < cantidad; i++) {
        starsHTML += `<span class="fa fa-star checked"></span>`;
    }
    for (i = cantidad; i < 5; i++) {
        starsHTML += `<span class="fa fa-star"></span>`;
    }
    return starsHTML
}



document.getElementById("comment-btn").addEventListener('click', function () {

    let hoy = new Date();
    const fecha = `${hoy.getFullYear()}-${hoy.getMonth() + 1}-${hoy.getDate()}`
    const hora = `${hoy.getHours()}:${hoy.getMinutes()}:${hoy.getSeconds()}`

    let comentario = document.getElementById("exampleFormControlTextarea1");
    let puntuacion = document.getElementById("exampleFormControlSelect1");

    document.getElementById('comentarios').innerHTML += `
        <div class="list-group-item">
        <div class="row">
        <div class="col-12">
        <strong> ${localStorage.getItem('user') || sessionStorage.getItem('user')}</strong> - ${fecha} ${hora} - ${mostrarEstrellas(puntuacion.value)}
        <p>${comentario.value}</p>
        </div>
        </div>
        </div>

    ;`
})


function setProdID(id) {
    localStorage.setItem("prodID", id);
    window.location = "product-info.html";
  }




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


function cerrarSesion(){
localStorage.removeItem('user');
}


sesionActiva();
