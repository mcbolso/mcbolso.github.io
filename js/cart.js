let unitCost;


document.addEventListener("DOMContentLoaded", function () {

    fetch(CART_INFO_URL + "25801" + EXT_TYPE)
        .then(respuesta => respuesta.json())
        .then(data => {

            for (i = 0; i < data.articles.length; i++) {

                unitCost = data.articles[i].unitCost;

                document.getElementById("productoCarrito").innerHTML += `<td><img src="${data.articles[i].image}" style="max-height: 70px; max-width: 70px;" class="img-thumbnail"></td>
                <td>${data.articles[i].name}</td>
                <td class="cantArt">${data.articles[i].currency + " " + data.articles[i].unitCost}</td>
                <td><input type="number" class="form-control" style="max-width: 70px;" value=1 id="cantidadArticulos" onchange="calcularTotal()"></td>
                <td id="subtotal">${data.articles[i].unitCost}</td>
                `
            }



        })


})


//función para calcular subtotal al aumentar cantidad
function calcularTotal() {


    let cantidad = document.getElementById("cantidadArticulos").value;
    document.getElementById("subtotal").innerHTML = unitCost * cantidad;

}