let listaProducto = JSON.parse(localStorage.getItem("arrayProductoKey")) || []


let buscador = document.querySelector("#buscador")
let botonBuscar = document.querySelector("#botonBuscar")
let resultado = document.querySelector("#resultado")



const filtrar = (e) => {
    resultado.innerHTML += ' '
    e.preventDefault()

    resultado.innerHTML = ' '
    // console.log(buscador.value);
    let texto = buscador.value.toLowerCase()
    for (let producto of listaProducto) {
        let nombre = producto.producto.toLowerCase()
        if (nombre.indexOf(texto) !== -1) {
            resultado.innerHTML += `
        <li>
                                <a href="">
                                    ${producto.producto} - Categoria : ${producto.categoria}
                                </a>
                            </li>
        `
        }
    }
    if (resultado.innerHTML === ' ') {
        resultado.innerHTML = `
    <li>producto no encontrado... </li>
    `
    }

    buscador.value = ''

}

botonBuscar.addEventListener("click", filtrar)
// buscador.addEventListener("keyup", filtrar)


let listaAdministradore = [ ]

