 // Ejecuta una secion cuando carga la pagina
 document.addEventListener('DOMContentLoaded', function() {

    //Obtenemos el id de la url
    const searchParams = new URLSearchParams(window.location.search)
    const id = searchParams.get("id") // Asignamos el id en una variable

    // Acceder a la informacion de la etiqueta form
    const form = document.getElementById('login-form')
    //Ejecuto una accion cuando el formulario se envia
    form.addEventListener('submit', function(event){
        event.preventDefault(); // Evita que el formulario recarge la pagina al enviar
        //creo el objeto que voy a almacenar
        const data = {

            nombres: document.getElementById('name').value,
            apellidos: document.getElementById('lastname').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
     
        }

        if(searchParams.has('id')){// Si llega un id en la URL -> Actualizamos
            submitForm(data, "https://backend-ivory-tau.vercel.app/campeon/"+id, "PUT")
        }else{
            submitForm(data, "http://localhost:3000/usuarios/", "POST")
        }

    })

    if(searchParams.has('id')){
        const id = searchParams.get("id")// Asignamos el id a una variante
        // Consulta la informacion del usuario que tiene ese id 
        fetch('https://backend-ivory-tau.vercel.app/campeon/'+id)
        .then(response => response.json())// Lo converte a formato json
        .then(data => {
            //Asognamos la informacion al formurario

            document.getElementById('nombre').value = data.nombre
            document.getElementById('clase').value = data.clase
            document.getElementById('carril').value = data.carril
            document.getElementById('costoEa').value = data.costoEa
            document.getElementById('costoRp').value = data.costoRp
        })
    }
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
                window.location.href = "/public/inicioDeSesion.html";
            }else{
                alert('El usuario ya esta registrado');
                window.location.href = "/public/index.html";
            }
        })
        .catch(error => console.log("Error: ", error))
}