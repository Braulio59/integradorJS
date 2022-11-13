const carrito = document.querySelector('.cart');
const productosContainer = document.querySelector('.products-container');







// Funcion para mostrar y cerrar el carrito
const mostrarCarrito = () => {
    carrito.classList.toggle('show-cart');
}; 

// Funcion para renderizar los productos y filtrarlos
const renderProductos = (category) => {
    let productosFiltrados = productsData.filter(f => {
        if( category === 'all') return true;
        return f.category === category;
    })  
    let productosDivididos = dividirProductos(productosFiltrados, 8);
    productosContainer.innerHTML = productosDivididos.map(i => {
        return renderProducto(i);
    }) .join("");
}; 

// funcion para dividir productos
const dividirProductos = (productos, cantidad) => {
    let productosDivididos = productos.splice(0, cantidad)
    return productosDivididos;
}; 

// funcion para renderizar un producto 
const renderProducto = (producto) => {
    return `<span>${producto.name}</span>`
}





const init = () => {
    renderProductos('all')
}

init();
