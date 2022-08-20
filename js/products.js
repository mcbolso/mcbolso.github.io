const URL = "https://japceibal.github.io/emercado-api/cats_products/101.json"


fetch(URL)
    .then ((respuesta) => respuesta.json())
    .then ((data) => {

        
        const ArrayDatos=data.products;
        mostrarAutos(ArrayDatos);


        function mostrarAutos(array){

            for(let i=0; i<array.length; i++){
                document.getElementById("info").innerHTML += `<div class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${array[i].image}" alt="${array[i].description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${array[i].name}</h4>
                            <small class="text-muted">${array[i].soldCount} artículos</small>
                        </div>
                        <p class="mb-1">${array[i].description}</p>
                    </div>
                </div>
            </div>
            `;
            }
        
        }

    });

