var firstName;
var secondName;
var firstSurname;
var secondSurname;
var phone;
var emailUpdate;
var photoSrc;
var imgPerfil;


document.addEventListener("DOMContentLoaded", function (e) {
    firstName = document.getElementById("firstName");
    secondName = document.getElementById("secondName");
    firstSurname = document.getElementById("firstSurname");
    secondSurname = document.getElementById("secondSurname");
    phone = document.getElementById("phone");
    emailUpdate = document.getElementById("email");
    photoSrc = document.getElementById("photo");
    imgPerfil = document.getElementById("imgPerfil");
    let type = { method: "GET", headers: { "Content-type": "application/json; charset=UTF-8" } };
    let userID = localStorage.getItem("userID");

    fetchJSONData(usersURL + "/" + userID, type).then(function (resultObj) {
        if (resultObj.status === "ok") {
            let user = resultObj.data;
            emailUpdate.value = user.email;
            firstName.value = user.Nombre;
            firstSurname.value = user.Apellido;
            secondName.value = user.Segundo_nombre;
            secondSurname.value = user.Segundo_apellido;
            phone.value = user.Telefono;
            imgPerfil.src = user.img;
        }
        else {
            console.log("Error con el usuario");
        }
    });
    document.getElementById("formulario").addEventListener("submit", handleSubmit);
});


function DatosPerfil(){

    var data = {
      "primerNombre": document.getElementById('firstName').value,
      "segundoNombre": document.getElementById('secondName').value,
      "primerApellido": document.getElementById('firstLastName').value,
      "segundoApellido": document.getElementById('secondLastName').value,
      "email": localStorage.getItem('userLog'),
      "telefono": document.getElementById('contactPhone').value,
    }
    localStorage.setItem(localStorage.getItem('userLog'), JSON.stringify(data));
    
}



function handleSubmit(event) {
    event.preventDefault();
    surnameValidation();
    phoneValidation();
    if (emailValidation() && nameValidation() && surnameValidation() && phoneValidation()) {
        event.preventDefault();
        updateUser(localStorage.getItem("userID"));
        submitTimer = setTimeout(() => {
            this.submit();
        }, 500)
    }
}




function emailValidation() {
    return elementValidation(emailUpdate)
}
function nameValidation() {
    return elementValidation(firstName)
}
function surnameValidation() {
    return elementValidation(firstSurname)
}
function phoneValidation() {
    return elementValidation(phone)
}

function elementValidation(element) {
    if (!element.checkValidity()) {
        element.nextElementSibling.style.display = "block"
        element.classList.add("is-invalid");
        element.classList.remove("is-valid");
    }
    else {
        element.nextElementSibling.style.display = "none"
        element.classList.add("is-valid");
        element.classList.remove("is-invalid");
    }
    return element.checkValidity()
}



if (localStorage.user != "") {
    document.getElementById("mostrarEmail").innerHTML = localStorage.user;
} if (localStorage.user === undefined) {
    document.getElementById("mostrarEmail").innerHTML = "Login";
};

if (document.getElementById("mostrarEmail").textContent == "Login") {
    window.location = "./login.html"
};


