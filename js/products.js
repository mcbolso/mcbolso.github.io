const ORDER_ASC_BY_COST = "OrdenarPrecioAsc"
const ORDER_DESC_BY_COST = "OrdenarPrecioDesc"
const ORDER_BY_REL = "OrdenarRel"
let filtroArray = [];
let minCount = undefined;
let maxCount = undefined;



document.addEventListener("DOMContentLoaded", function (){

fetch(PRODUCTS_URL + localStorage.getItem("catID") + EXT_TYPE)
    .then (respuesta => respuesta.json())
    .then (data => { filtroArray = data.products;
    mostrarCategorias(filtroArray);

    document.getElementById("info").innerHTML = `<div class="text-center p-4">
    <h2>Productos</h2>
    <p class="lead">Verás aquí todos los productos de la categoria ${data.catName}</p>
    </div>`
})
    
    document.getElementById("sortAsc").addEventListener("click", function(){
        let arrayOrdenado = sortProductos(ORDER_ASC_BY_COST, filtroArray);
        mostrarCategorias(arrayOrdenado);
    });

    document.getElementById("sortDesc").addEventListener("click", function(){
        let arrayOrdenado = sortProductos(ORDER_DESC_BY_COST, filtroArray);
        mostrarCategorias(arrayOrdenado);
    });

    document.getElementById("sortByRel").addEventListener("click", function(){
        let arrayOrdenado = sortProductos(ORDER_BY_REL, filtroArray);
        mostrarCategorias(arrayOrdenado);
    });


    document.getElementById("rangeFilterCount").addEventListener("click", function(){
        //Obtengo el mínimo y máximo de los intervalos para filtrar por cantidad
        //de productos por categoría.
        minCount = document.getElementById("rangeFilterCountMin").value;
        maxCount = document.getElementById("rangeFilterCountMax").value;

        if ((minCount != undefined) && (minCount != "") && (parseInt(minCount)) >= 0){
            minCount = parseInt(minCount);
        }
        else{
            minCount = undefined;
        }

        if ((maxCount != undefined) && (maxCount != "") && (parseInt(maxCount)) >= 0){
            maxCount = parseInt(maxCount);
        }
        else{
            maxCount = undefined;
        }

        mostrarCategorias(filtroArray);
    });



    

    document.getElementById("clearRangeFilter").addEventListener("click", function(){
        document.getElementById("rangeFilterCountMin").value = "";
        document.getElementById("rangeFilterCountMax").value = "";

        minCount = undefined;
        maxCount = undefined;

        mostrarCategorias(filtroArray);
    });


});









function sortProductos(criteria, array){
    let result = [];
    if (criteria === ORDER_ASC_BY_COST)
    {
        result = array.sort(function(a, b) {
            if ( a.cost < b.cost ){ return -1; }
            if ( a.cost > b.cost ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_DESC_BY_COST){
        result = array.sort(function(a, b) {
            if ( a.cost > b.cost ){ return -1; }
            if ( a.cost < b.cost ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_BY_REL){
        result = array.sort(function(a, b) {
            let aCount = parseInt(a.soldCount);
            let bCount = parseInt(b.soldCount);

            if ( aCount > bCount ){ return -1; }
            if ( aCount < bCount ){ return 1; }
            return 0;
        });
    }

    return result;
}



function setProdId(id) {
    localStorage.setItem("prodID", id);
    window.location = "product-info.html"
}





function mostrarCategorias(array){

    let lista = "";


    for(let i=0; i<array.length; i++){
        if (((minCount == undefined) || (minCount != undefined && parseInt(array[i].cost) >= minCount)) &&
            ((maxCount == undefined) || (maxCount != undefined && parseInt(array[i].cost) <= maxCount))){
                lista += `<div onclick="setProdId(${array[i].id})" class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${array[i].image}" alt="${array[i].description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${array[i].name}-${array[i].currency}-${array[i].cost}</h4>
                            <small class="text-muted">${array[i].soldCount} artículos</small>
                        </div>
                        <p class="mb-1">${array[i].description}</p>
                    </div>
                </div>
            </div>
            `;
                }
            }
            document.getElementById("cat-list-container").innerHTML = lista
        
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


sesionActiva();

