 // Ejecuta una sesión cuando carga la pagina
 document.addEventListener('DOMContentLoaded', function() {

    //Obtenemos el id de la url
    const searchParams = new URLSearchParams(window.location.search)

    // Acceder a la información de la etiqueta form
    const form = document.getElementById('login-form')
    //Ejecuto una acción cuando el formulario se envía
    form.addEventListener('submit', function(event){
        event.preventDefault(); // Evita que el formulario recarga la pagina al enviar
        //creo el objeto que voy a almacenar
        const data = {

            nombres: document.getElementById('name').value,
            apellidos: document.getElementById('lastname').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
     
        }

        submitForm(data, "http://localhost:3000/usuarios/", "POST")

    })


})

function submitForm(data, url, method){
    fetch(url, {
            method: method, 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            return response.json()
        })
        .then(data => {
            if(data.status == "success"){
                alert('Usuario registrado correctamente')
                window.location.href = "inicioDeSesion.html";
            }else{
                alert('El usuario ya esta registrado');
                window.location.href = "inicioDeSesion.html";
            }
        })
        .catch(error => console.log("Error: ", error))
}