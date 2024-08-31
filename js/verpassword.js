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
