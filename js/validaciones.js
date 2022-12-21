
// validaciones 
export const campoRequerido = (input) => {
    // console.log('desde campo requerido');
    // console.log(input.value);
  
    if (input.value.trim().length > 0) {
      // console.log("todo bien");
      input.className = "form-control is-valid";
      return true;
    } else {
      // console.log("aqui muestro un error");
      input.className = "form-control is-invalid";
      return false;
    }
  };
  export const validarEmail = (input) => {
    let patron =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ ;

    if (patron.test(input)) {
      return true
    } 
  }
   export const validarUrl = (input) => {
      let patron = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
  
      if (patron.test(input.value)) {
      // cuando se cumpla con el match
      input.className = "form-control is-valid";
      return true;
    } else {
      input.className = "form-control is-invalid";
      return false;
    }
  };
    export const validarGeneral = (
      campoProducto,
    campoDescripcion,
    campoCategoria,
      campoUrl
  ) => {
    //comprobar que pasen cada una validaciones y si no pasan mostrar el alert
    let alerta = document.querySelector("#msjAlerta");
    if (
       campoRequerido(campoProducto) &&
      campoRequerido(campoDescripcion) &&
      campoRequerido(campoCategoria) &&
      validarUrl(campoUrl)
    ) {
      alerta.className = "alert alert-danger mt-4 d-none";
      return true;
    } else {
      console.log("validación incorrecta");
      alerta.className = "alert alert-danger mt-4";
      return false;
    }
  };