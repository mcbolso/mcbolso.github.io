let unitCost;
let subtotal;
let costoEnvio;




document.addEventListener("DOMContentLoaded", function () {

    fetch(CART_INFO_URL + "25801" + EXT_TYPE)
        .then(respuesta => respuesta.json())
        .then(data => {

            for (i = 0; i < data.articles.length; i++) {

                unitCost = data.articles[i].unitCost;

                document.getElementById("productoCarrito").innerHTML += `<td><img src="${data.articles[i].image}" style="max-height: 70px; max-width: 70px;" class="img-thumbnail"></td>
                <td>${data.articles[i].name}</td>
                <td class="cantArt">${data.articles[i].currency + " " + data.articles[i].unitCost}</td>
                <td><input type="number" class="form-control" style="max-width: 70px;" min=1 value=1 id="cantidadArticulos" onchange="calcularTotal()"></td>
                <td id="subtotal">${data.articles[i].unitCost}</td>
                `
            }

            calcularTotal();




            document.getElementById("creditCardPaymentRadio").addEventListener("change", function(){

                document.getElementById("creditCardNumber").disabled = false;
                document.getElementById("creditCardSecurityCode").disabled = false;
                document.getElementById("dueDate").disabled = false;
                document.getElementById("bankAccountNumber").disabled = false;
                document.getElementById("bankAccountNumber").disabled = true;
                document.getElementById("paymentType").innerHTML = "Tarjeta de crédito"
            })
        
                
        })

            document.getElementById("bankingRadio").addEventListener("change", function(){
                document.getElementById("creditCardNumber").disabled = true;
                document.getElementById("creditCardSecurityCode").disabled = true;
                document.getElementById("dueDate").disabled = true;
                document.getElementById("bankAccountNumber").disabled = false;
                document.getElementById("paymentType").innerHTML = "Transferencia bancaria"
            })

        


})


//función para calcular subtotal al aumentar cantidad
function calcularTotal() {


    let cantidad = document.getElementById("cantidadArticulos").value;
    subtotal = unitCost * cantidad;
    document.getElementById("subtotal").innerHTML = unitCost * cantidad;
    document.getElementById("subtotal2").innerHTML = unitCost * cantidad;

    mostrarCostoEnvio();

}

function mostrarCostoEnvio(){

    if (document.getElementById("premium").checked){
        costoEnvio = subtotal * 0.15;
    } else if (document.getElementById("express").checked){
        costoEnvio = subtotal * 0.07;
    } else if (document.getElementById("standar").checked){
        costoEnvio = subtotal * 0.05;
    }

    document.getElementById("shippingText").innerHTML = costoEnvio;
    mostrarTotal();
}

function mostrarTotal(){

    document.getElementById("totalCostText").innerHTML =  costoEnvio + subtotal;

}



    









// Ejemplo de JavaScript inicial para deshabilitar el envío de formularios si hay campos no válidos
(function () {
    'use strict'
  
    // Obtener todos los formularios a los que queremos aplicar estilos de validación de Bootstrap personalizados
    var forms = document.querySelectorAll('.needs-validation')
  
    // Bucle sobre ellos y evitar el envío
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()