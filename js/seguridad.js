const rol = sessionStorage.getItem('storedRol');

function salir(){

  if ( rol == "administrador"){
      sessionStorage.removeItem('storedRol');
      window.location.href = '../index.html';
  }else if(rol == "cliente") {
    sessionStorage.removeItem('storedRol');
    window.location.href = '../index.html';
  }else if(rol == "usuario"){
    sessionStorage.removeItem('storedRol');
    window.location.href = '../index.html';
  }else{
    window.location.href = '../index.html';
  }


}