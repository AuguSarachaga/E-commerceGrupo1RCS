// Array para almacenar los productos seleccionados en el carrito
var carrito = [];

// Función para agregar un producto al carrito
function agregarAlCarrito(producto) {
  carrito.push(producto);
}

// Función para mostrar los productos en el carrito
function mostrarCarrito() {
  console.log("Productos en el carrito:");
  carrito.forEach(function(producto, index) {
    console.log(index + 1 + ". " + producto.nombre);
  });
}

// Ejemplo de uso
agregarAlCarrito({ id: 1, nombre: "Conjunto Magia", precio: 29.99 });
agregarAlCarrito({ id: 2, nombre: "Anillo Plata", precio: 15.99 });
mostrarCarrito();
