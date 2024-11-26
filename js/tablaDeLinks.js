document.addEventListener('DOMContentLoaded', function(){
  fetch('http://localhost:3000/link')
  .then(response => response.json())//lo combierte en formato json
  .then(data => { // Guarda la informacion en la variable data
     // Accedemos a la etiqueta que va a mostrar los datos
     const tableBody = document.getElementById('links')
     // Recorremos cada uno de los datos que trae el servicio
     data.forEach(link =>{
         // Creamos una etiqueta <tr> usando js
         const row = document.createElement('tr')
         // Creamos una etiqueta <td> usando js
         const nombreLinks = document.createElement('td')
         // Agregamos el valor ala etiqueta
         nombreLinks.textContent = link.nombreLinks
         // Agregamos el <tr> al <td>
         row.appendChild(nombreLinks)
         
         const links = document.createElement('td')
         links.textContent = link.links
         row.appendChild(links)    

         const opcionlinks = document.createElement('td')
         opcionlinks.textContent = link.opcionlinks
         row.appendChild(opcionlinks)


         const acciones = document.createElement('td')
         const editar = document.createElement('a')
         editar.textContent = 'Editar'
         editar.href = 'http://127.0.0.1:5501/vistaAdministrador/crearLinks.html?id='+link._id
         editar.classList.add('btn', 'btn-warning')

         const eliminar = document.createElement('button')// Creamos la etiqueta button
         eliminar.textContent = 'Eliminar'// Agregamos el texto al boton
         eliminar.classList.add('btn', 'btn-danger')

         eliminar.addEventListener('click', function(){ // Creamos un evento al dar click
             const textoConfirmacion = 'Esta seguro que decea eliminar a ' + link.nombreLinks + ' ?'
             if(confirm(textoConfirmacion)){// Mostramos un mensaje de confirmacion
                 eliminarCampeon(link._id, row)
             }
         })

         const copiar = document.createElement('button')// Creamos la etiqueta button
         copiar.textContent = 'copiar'// Agregamos el texto al boton
         copiar.classList.add('btn', 'btn-success')
         copiar.setAttribute("id", "copybutton");

        copiar.addEventListener('click', function(){
            function clipboardCopy(texto) {
              navigator.clipboard.writeText(texto).then(function() {
                  
              }).catch(function(err) {
                  
              });
            }
            
            document.addEventListener("DOMContentLoaded", function() {
              document.getElementById("copybutton").addEventListener("click", function() {
                clipboardCopy(document.getElementById('textarea__mensaje__encriptado').value);
              });
            });        
        })
      
         acciones.appendChild(eliminar)
         acciones.appendChild(editar)
         acciones.appendChild(copiar)

         row.appendChild(acciones)


         // Agregamos el <tr> a la tabla
         tableBody.appendChild(row)

     })
  })
})

// Funcion para eliminar un usuario, pasandole el id 
function eliminarCampeon(id, row){
 //Esta es la url de eliminacion, por ejemplo
 //http://localhost:3000/usuario/65465df654fda45dff
 const deleteUrl = 'http://localhost:3000/link/'+id
 //Ejecuto la accion del API 
 fetch(deleteUrl, { 
     method: 'DELETE' // Defino el metodo a utilizar
 })
 .then(response => {
     //Obtengo la respuestadel servidor
     if(response.status == 200){// Validando que sea exitosa 
         row.remove()// Elimino al usuario de la lista
         alert('Link eliminado correctamente') 
     }else{
         alert('Error eliminando el link')// Muestro mensaje de error
     }
 })
 .catch(error => console.log('Error', error))
}