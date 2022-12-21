
let nombre = document.getElementById("nombreContacto")
let email = document.getElementById("emailContacto")
let consulta = document.getElementById("consultaContacto")

let btnEnviar = document.getElementById("btnEnviar")

btnEnviar.addEventListener("click", enviarMail)

let templateParams = {
    from_name: `${nombre.value}`,
    Administrador_name: 'Administrador',
    destinatario: "carlosdev52@gmail.com",
    message:  `${consulta.value}` ,
};
function enviarMail(e) {
    e.preventDefault();
    console.log("probando funcion");
    emailjs.send('service_lfzlfu5', 'template_akjtwwz', templateParams)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            console.log('FAILED...', error);
        });
         
Swal.fire({
    position: 'top-center',
    icon: 'success',
    title: 'su consulta fue enviada con exito!',
    showConfirmButton: false,
    timer: 1500
  })       
}
