// se crea la variante para saber desde que correo se va a reportar la creación del correo 
const mail = document.getElementById('email').value;
 console.log(mail);
 // Ejecuta una acción cuando carga la pagina
 document.addEventListener('DOMContentLoaded', function() {

    const searchParams = new URLSearchParams(window.location.search)
    const id = searchParams.get("id") // Asignamos el id a una variable

    // Acceder a la información de la etiqueta form
    const form = document.getElementById('login-form')
    // Ejecuto una accion cuando el formulario se envia
    form.addEventListener('submit', function(event){
        event.preventDefault(); // Evita que el formulario recargue la pagina al enviar
        // Creo el objeto que voy a almacenar
        const data = {
            nombres: document.getElementById('nombres').value,
            apellidos: document.getElementById('apellidos').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        }


        submitForm(data, "http://localhost:3000/usuario", "POST")
    });

})

function submitForm(data, url, method){


    fetch(url, { // localhost:3000/usuario
            method: method, // POST
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            return response.json()                
        })
        .then(data => {
            if(data.status == "success"){ // Validamos la respuesta del servidor
                alert('Usuario registrado correctamente, Se envió un correo de confirmación de cuenta al coreeo:  '+ email.value);
                window.location.href = "inicioDeSesion.html"; // Re diseccionamos a la lista
            }else{
                alert('Error, el usuario ya esta registrado');
                window.location.href = "inicioDeSesion.html";
            }
        })
        .catch((error) => console.log("Error: ", error))
}