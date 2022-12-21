let listaProducto = JSON.parse(localStorage.getItem("arrayProductoKey")) || []

let buscador = document.querySelector("#buscador")
let botonBuscar = document.querySelector("#botonBuscar")
let resultado = document.querySelector("#resultado")
let navBar = document.querySelector("#navBar")

navBar.addEventListener("dblclick", LimparLista)

const filtrar = (e) => {
    resultado.innerHTML = ' '
    e.preventDefault()
    if (buscador.value !== 0) {
        resultado.innerHTML = ' '
        // console.log(buscador.value);
        let texto = buscador.value.toLowerCase()
        for (let producto of listaProducto) {
            let nombre = producto.producto.toLowerCase()
            if (nombre.indexOf(texto) !== -1) {
                resultado.innerHTML += `
        <li>
             <a href="" class="linksBusqueda">
                  ${producto.producto} - Categoria : ${producto.categoria}
             </a>
        </li>`
            }
        }
        for (let producto of listaProducto) {
            let categoria = producto.categoria.toLowerCase()
            if (categoria.indexOf(texto) !== -1) {
                resultado.innerHTML += `
        <li>
             <a href="" class="linksBusqueda">
                  ${producto.producto} - Categoria : ${producto.categoria}
            </a>
        </li>`
    }
        }
        if (resultado.innerHTML === ' ') {
            resultado.innerHTML = `
    <li>producto no encontrado... </li>`
    }
    }
    buscador.value = ''
}
// filtrar()
botonBuscar.addEventListener("click", filtrar)
// buscador.addEventListener("keyup", filtrar)
// limpiar lista de busqueda
function LimparLista() {
    resultado.innerHTML = ' '
}


