


document.addEventListener("DOMContentLoaded", function (){

    fetch(PRODUCT_INFO_URL + localStorage.getItem("prodID") + EXT_TYPE)
        .then (respuesta => respuesta.json())
        .then (data => {
    
        document.getElementById("titulo").innerHTML = data.name;
        document.getElementById("categorias").innerHTML = data.category;
        document.getElementById("descripcion").innerHTML = data.description;
        document.getElementById("precio").innerHTML = data.currency + data.cost;
        document.getElementById("vendidos").innerHTML = data.soldCount;


        
    })
        
    
    
    

    
    });