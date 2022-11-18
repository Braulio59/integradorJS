const carrito = document.querySelector('.cart');
const productosContainer = document.querySelector('.products-container'); 
const cartContainer = document.querySelector('.cart-container');
const total = document.getElementById('cart-total');
const btnAll = document.getElementById('btnAll');
const btnMalbec = document.getElementById('btnMalbec');
const btnCabernet = document.getElementById('btnCabernet');
const btnRose = document.getElementById('btnRose');
const btnBlanc = document.getElementById('btnBlanc');




const categoriaBtn = [btnAll,btnBlanc,btnCabernet,btnMalbec,btnRose]

let arrayCarrito = JSON.parse(localStorage.getItem('carrito')) || [];

// funcion para guardar en localStorage 
const guardarLocalStorage = () => {
    localStorage.setItem('carrito', JSON.stringify(arrayCarrito));
}




// Funcion para mostrar y cerrar el carrito
const mostrarCarrito = () => {
    carrito.classList.toggle('show-cart');
}; 

// funcion para agregar al carrito
const agregarAlCarrito = (id) => {
    let productoAgregado = productsData.find((producto) => {
        if(producto.id === id) return true
    }); 
    let productoExistente = arrayCarrito.find(producto => producto.id === id) 
    if (productoExistente) {
        productoExistente.quantity ++;
    } else { arrayCarrito.push({
        name: productoAgregado.name,
        id: productoAgregado.id,
        bid: productoAgregado.bid,
        quantity: 1
    });}
    renderProductosCarrito();
    guardarLocalStorage();
}  

// funcion para el boton de restar producto en el carrito
const restarProducto = (id) => {
    let productoExistente = arrayCarrito.find(producto => producto.id === id)
    if (productoExistente.quantity > 1) {
        productoExistente.quantity--;
    } else {
        arrayCarrito.splice(arrayCarrito.indexOf(productoExistente),1);
    }
    renderProductosCarrito();
}

// funcion para renderizar los productos del carrito
const renderProductosCarrito = () => {
    let cardsCarrito = arrayCarrito.map(f => {
        return `<div class="cart-card">
            <span class="product-name">${f.name}</span>
            <span>$${f.bid}</span>
            <div class="card-quantity">
                <i class="fas fa-chevron-down" onclick="restarProducto(${f.id})"></i>
                <span>${f.quantity}</span>
                <i class="fas fa-chevron-up" onclick="agregarAlCarrito(${f.id})"></i>
            </div>
        </div>`
    }); 
    cartContainer.innerHTML = cardsCarrito.join("");
} 

// funcion para vaciar el carrin 
const vaciarCarrito = () => {
    arrayCarrito = []; renderProductosCarrito();
};



// Funcion para renderizar los productos y filtrarlos
let cantidadRender = 8;
let activeCategory = 'all';
const renderProductos = (category) => {
    activeCategory = category;
    let productosFiltrados = productsData.filter(f => {
        if( category === 'all') return true;
        return f.category === category;
    })  
    let productosDivididos = dividirProductos(productosFiltrados, cantidadRender);
    productosContainer.innerHTML = productosDivididos.map(i => {
        return renderProducto(i);
    }) .join("");
}; 

// funcion para dividir productos
const dividirProductos = (productos, cantidad) => {
    let productosDivididos = productos.splice(0, cantidad)
    return productosDivididos;
}; 

// funcion para mostar mas productos
const mostrarMas = () => {
    cantidadRender += 8;
    renderProductos(activeCategory);
}

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
    cantidadRender = 8;
} 







const init = () => {
    renderProductos('all');
    renderProductosCarrito();
}

init();
