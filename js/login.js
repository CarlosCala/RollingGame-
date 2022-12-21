import { validarEmail } from "./validaciones.js";

let btnIniciar = document.getElementById("IniciarSesion");
let btnCerrar = document.getElementById("btnCerrarS");
let btnRegistrarme = document.getElementById("reg");

btnRegistrarme.addEventListener("click", guardarUsuario)
btnIniciar.addEventListener("click", handleSubmit)
btnCerrar.addEventListener("click", cerrarSesion)

/*registro de usuarios */
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

class Usuario {
  constructor(nombre, apellido, email, password, rol = "usuario") {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.password = password;
    this.rol = rol;
  }
}
function guardarUsuario(e) {
  e.preventDefault();
  let nombre = document.getElementById("textName").value;
  let apellido = document.getElementById("textSurname").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let password2 = document.getElementById("password2").value;
 
  //VALIDAR CONTRASEÑAS
  if(validarEmail(email)) {
    if (password !== password2) {
      return alert("Las contraseñas no coinciden.");
    }
  
    let validar = usuarios.find((user) => {
      return user.email === email;
    });
  
    if (validar) {
      return alert(
        "El correo ya esta registrado. Inicie sesion con su email y contraseña."
      );
    }
        usuarios.push(new Usuario(nombre, apellido, email, password));
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
      document.getElementById("formRegistro").reset();
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Bienvenido Rolling Gamer',
        showConfirmButton: false,
        timer: 2000
      })
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Email no valido',
      text: 'email no valido',
      footer: 'ej : .........@gmail.com'
    })
    return false
  }
  }

document.getElementById("formRegistro");
addEventListener("submit", guardarUsuario);

let usuario = JSON.parse(localStorage.getItem("usuarios")) || [];
let logUser = JSON.parse(localStorage.getItem("userLogin"));

function handleSubmit(e) 
{
  e.preventDefault();
  
  let emailLogin = document.querySelector("#emailLogin").value;
  let pass = document.querySelector("#passLogin").value;
  
  //buscamos el correo del usuario
  let validacion = usuario.find((user) => {
    return user.email === emailLogin;
  });  
  if (validacion)
  {    
      if (validacion.password === pass) {      
        //guardamos la sesion del usuario
        
        localStorage.setItem("userLogin", JSON.stringify(validacion));  
        if(pass === '12345') {
          console.log("funcion start")
          window.location.replace("../admin.html")
          btnCerrar.className ="nav-item  text-dark"
        } else {
          window.location.replace("../index.html")
        }
                }
      }
}
  

// function recuperarCuenta() {
//   let imputCorreo = document.getElementById('emailRecu').value;
//   // console.log(imputCorreo)


//   let email = usuario.find((x) => x.email == imputCorreo).email || [];
//   // console.log(email)

//   if (email) {
//     if (email === imputCorreo) {
//       alert('Le enviamos un mail con la informacion necesaria para recuperar su cuenta')
//     }
//     else {
//       alert('El correo ingresado no es valido');
//     }
//   } else {
//     alert('El correo ingresado no es valido');
//   }
// }

// function cerrarSesion() {
//   localStorage.removeItem("userLogin");
//   if (window.location.pathname.split("/").pop() == 'index.html') {
//     location.replace("../index.html");
//   } else {
//     location.replace("../index.html");
//   }
// }



