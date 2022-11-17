const carrito = document.querySelector('.cart');
const productosContainer = document.querySelector('.products-container'); 
const btnAll = document.getElementById('btnAll');
const btnMalbec = document.getElementById('btnMalbec');
const btnCabernet = document.getElementById('btnCabernet');
const btnRose = document.getElementById('btnRose');
const btnBlanc = document.getElementById('btnBlanc');




const categoriaBtn = [btnAll,btnBlanc,btnCabernet,btnMalbec,btnRose]

const arrayCarrito = [];






// Funcion para mostrar y cerrar el carrito
const mostrarCarrito = () => {
    carrito.classList.toggle('show-cart');
}; 

// funcion para agregar al carrito
const agregarAlCarrito = (id) => {
    let productoAgregado = productsData.find((producto) => {
        if(producto.id === id) return true
    }) 
    arrayCarrito.push(productoAgregado);
} 

// funcion para renderizar los productos del carrito
const renderProductosCarrito = () => {
    
}

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
    const {id , name, cardImg, bid, category} = producto;
    return `
    <div class="product-card">
        <div class="product-img" style="background-image: url(${cardImg})">
        </div>
        <div class="product-text"> 
            <div class="product-description">
                <h3>${name}</h3>
                <span>${category}</span>
            </div>
            <div class="product-bid">
                <span>$${bid}</span>
                <button onclick="agregarAlCarrito(${id})" class="btn-agregar">Agregar</button>
            </div>
        </div>
    </div>`
    
} 

// funcion para pintar la categoria activa
const pintarCategoria = (category) => {
    categoriaBtn.forEach(boton => {
        boton.classList.remove('active');
    }); 
    let activeButton = categoriaBtn.find(boton => {
        if(boton.dataset.category === category) return true
    }) 
    activeButton.classList.add('active');
}

// funcion para seleccionar las categorias
const selectCategory = (event) => {
    event.preventDefault();
    let eventDataSet = event.target.dataset;
    pintarCategoria(eventDataSet.category);
    renderProductos(eventDataSet.category);
} 







const init = () => {
    renderProductos('all')
}

init();
