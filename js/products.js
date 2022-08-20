const URL = https://japceibal.github.io/emercado-api/cats/cat.json

fetch(URL){
    .then (respuesta => respuesta.json)
    .then (data => {

        const ArrayDatos=data;
        mostrarAutos(ArrayDatos);

    })
}



function mostrarAutos(array){

    for(let i=0; i<array.length; i++){
        document.getElementById("info").innerHTML += element.id;
    }

}

