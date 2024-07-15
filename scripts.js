const products = [
    {
        id: 1,
        name: 'Product 1',
        description: 'Description for product 1',
        price: 10.0,
        image: 'path/to/image1.jpg'
    },
    {
        id: 2,
        name: 'Product 2',
        description: 'Description for product 2',
        price: 20.0,
        image: 'path/to/image2.jpg'
    },
    {
        id: 3,
        name: 'Product 3',
        description: 'Description for product 3',
        price: 30.0,
        image: 'path/to/image3.jpg'
    }
];

let cart = [];

function renderProducts() {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';
    
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        
        productsContainer.appendChild(productElement);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    document.getElementById('cart-count').innerText = cart.length;
}

// Initial render
renderProducts();