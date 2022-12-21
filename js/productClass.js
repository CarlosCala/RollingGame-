export class Producto {
   constructor(codigo, producto, descripcion, categoria, publicado, url, destacado = false ) {
      this.codigo = codigo;
      this.producto = producto;
      this.descripcion = descripcion;
      this.categoria = categoria;
      this.publicado = publicado
      this.url = url;
      this.destacado = destacado;

   }
// getters y setters
get mostrarCodigo() {
   return this.codigo;
}

 get mostrarProducto() {
   return this.producto;
}
 get mostrarDescripcion() {
   return this.descripcion;
}
get mostrarCategoria () {
   return this.categoria;
}
 get mostrarPublicado() {
   return this.publicado;
}
 get mostrarUrl() {
   return this.url;
}
get mostrarDesctacado() {
   return this.destacado;
}
 // setters para modificar el producto 
 set modificarCodigo(codigo) {
   this.codigo = codigo;
}
 set modificarProducto(producto) {
   this.producto = producto;
}
 set modificarDescripcion(nuevaDescripcion) {
   this.descripcion = nuevaDescripcion;
}
  set modificarCategoria(categoria) {
   this.categoria = categoria;
}
 set modificarUrl(url) {
   this.url = url;
}
set modificarDestacado(destacado) {
   this.destacado = destacado;
}
};