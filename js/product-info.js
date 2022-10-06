

document.addEventListener("DOMContentLoaded", function (){

    fetch(PRODUCT_INFO_URL + localStorage.getItem("prodID") + EXT_TYPE)
        .then (respuesta => respuesta.json())
        .then (data => {
    
        document.getElementById("titulo").innerHTML = data.name;
        document.getElementById("categorias").innerHTML = data.category;
        document.getElementById("descripcion").innerHTML = data.description;
        document.getElementById("precio").innerHTML = data.currency + data.cost;
        document.getElementById("vendidos").innerHTML = data.soldCount;

        for(i=0; i<data.images.length; i++){
        document.getElementById("imagenes").innerHTML += `<img src="${data.images[i]}" class="m-3" style="width:20%;border: solid 1.5px grey;"></img> `

        
        }
    })
    


});
    
    fetch(PRODUCT_INFO_COMMENTS_URL + localStorage.getItem("prodID") + EXT_TYPE)
    .then (respuesta => respuesta.json())
    .then (data => {

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



    function mostrarEstrellas(cantidad){

        let starsHTML = "";

        for(i=0; i<cantidad; i++){
            starsHTML += `<span class="fa fa-star checked"></span>`;
        }
        for(i=cantidad; i < 5; i++){
            starsHTML += `<span class="fa fa-star"></span>`;
        }
        return starsHTML
    }



    document.getElementById("comment-btn").addEventListener('click', function(){
        
        let hoy = new Date();
        const fecha = `${hoy.getFullYear()}-${hoy.getMonth()+1}-${hoy.getDate()}`
        const hora =  `${hoy.getHours()}:${hoy.getMinutes()}:${hoy.getSeconds()}`

        let comentario = document.getElementById("exampleFormControlTextarea1");
        let puntuacion = document.getElementById("exampleFormControlSelect1");

        document.getElementById('comentarios').innerHTML +=`
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