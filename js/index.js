const handleAddToCart = () => {
    const productField = document.getElementById('product-name');
    const quantityField = document.getElementById('product-quantity');
    const product = productField.value;
    const quantity = quantityField.value;
    productField.value = '';
    quantityField.value = '';
    displayProducts(product, quantity);
    saveProductToLocalStore(product, quantity);
}

const displayProducts = (product, quantity) => {
    const productContaier = document.getElementById('products-container');
    const li = document.createElement('li');
    li.innerText = `Product: ${product}, Quantity: ${quantity}`
    productContaier.appendChild(li);
}

const getStoredShoppingCart = () => {
    let cart = {};
    const savedCart = localStorage.getItem('cart');
    if(savedCart){
        cart = JSON.parse(savedCart)
    }
    return cart;
}

const saveProductToLocalStore = (product, quantity) => {
    const cart = getStoredShoppingCart();
    cart[product] = quantity;
    const cartStgring = JSON.stringify(cart);
    localStorage.setItem('cart', cartStgring);
    // console.log(cart);
}

const displayProductsFromLocalStorage = () => {
    const savedCart = getStoredShoppingCart();
    // console.log(savedCart);
    for(const product in savedCart) {
        const quantity = savedCart[product];
        displayProducts(product, quantity);
    }
}


displayProductsFromLocalStorage();