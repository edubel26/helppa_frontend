 // Ejecuta una acción cuando carga la pagina
 document.addEventListener('DOMContentLoaded', function() {

    const searchParams = new URLSearchParams(window.location.search)
    const id = searchParams.get("id") // Asignamos el id a una variable

    // Acceder a la información de la etiqueta form
    const form = document.getElementById('crearLink')
    // Ejecuto una accion cuando el formulario se envia
    form.addEventListener('submit', function(event){
        event.preventDefault(); // Evita que el formulario recargue la pagina al enviar
        // Creo el objeto que voy a almacenar
        const data = {
            nombreLinks: document.getElementById('nombreLinks').value,
            links: document.getElementById('links').value,
            opcionlinks: document.getElementById('opcionlinks').value
  
        }

        if(searchParams.has('id')){// Si llega un id en la URL -> Actualizamos
            submitForm(data, "http://localhost:3000/link/"+id, "PUT")
        }else{
            submitForm(data, "http://localhost:3000/link/", "POST")
        }
    });
    
    if(searchParams.has('id')){
        const id = searchParams.get("id")// Asignamos el id a una variante
        // Consulta la informacion del usuario que tiene ese id 
        fetch('http://localhost:3000/link/'+id)
        .then(response => response.json())// Lo converte a formato json
        .then(data => {
            //Asognamos la informacion al formurario
  
            document.getElementById('nombreLinks').value = data.nombreLinks
            document.getElementById('links').value = data.links
            document.getElementById('opcionlinks').value = data.opcionlinks
        })
    }

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
                alert('El link fue ingresado correctamente');
                window.location.href = "ListaDeLinks.html"; // Re diseccionamos a la lista
            }else{
                alert('Error, El link no enviado, !Intentar con una dirección https valida o intentar mas tarde!');
                window.location.href = "crearLinks.html";
            }
        })
        .catch((error) => console.log("Error: ", error))
}