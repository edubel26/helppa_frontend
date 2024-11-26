// Obtener referencias a los elementos del formulario
const form = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const rememberCheckbox = document.getElementById('remember');
const rolInput = document.getElementById('select');

const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get("id") // Asignamos el id en una variable

// Cargar datos almacenados (si existen)
const storedEmail = localStorage.getItem('storedEmail');
const storedPassword = localStorage.getItem('storedPassword');
if (storedEmail && storedPassword) {
    emailInput.value = storedEmail;
    passwordInput.value = storedPassword;
    rememberCheckbox.checked = true;

}else{

    const password = document.getElementById("password"),
    icono = document.querySelector(".bx");

    icono.addEventListener("click", e => {
        if(password.type === "password"){
            password.type = "text";
            icono.classList.remove('bx-show-alt');
            icono.classList.add('bx-low-vision');
        }else{
            password.type = "password";
            icono.classList.remove('bx-low-vision');
            icono.classList.add('bx-show-alt');

        }
    })
}

document.addEventListener('DOMContentLoaded', function() {
    // Manejar el envío del formulario
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Evitar que se envíe el formulario automáticamente
        
        const email = emailInput.value;
        const password = passwordInput.value;
        const rolUsuarios = rolInput.value


        if(rolUsuarios == ""){
            alert("!ERROR¡ en el sistema re intentar mas tarde ");
        }else{
            console.log(rolUsuarios);
        }

        
        // Validar los campos (puedes agregar más validaciones aquí)
        if (!email || !password) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        // Almacenar datos si se marcó el checkbox
        if (rememberCheckbox.checked) {
            localStorage.setItem('storedEmail', email);
            localStorage.setItem('storedPassword', password);
            sessionStorage.setItem('storedRol', rolUsuarios);
        } else {
            // Limpiar datos almacenados si no se marcó el checkbox
            localStorage.removeItem('storedEmail');
            localStorage.removeItem('storedPassword');
            sessionStorage.removeItem('storedRol');
            
        }

        const data = {

            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            rolUsuarios: document.getElementById('select')
     
        }

        submitForm(data, "http://localhost:3000/login", "POST")

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

            const rolUsuarios = rolInput.value

            if(rolUsuarios == "administrador" ){
                
                window.location.href = 'vistaAdministrador/index.html';
            }else if ( rolUsuarios == "cliente"){
    
                window.location.href = 'vistaCliente/index.html';
            }else{
    
                window.location.href = 'vistaUsuario/index.html';
            }

        }else{
            alert('Datos incorrectos o el usuario no existe');
            window.location.href = "crearCuenta.html";
        }
    })
    .catch(error => console.log("Error: ", error))
}





