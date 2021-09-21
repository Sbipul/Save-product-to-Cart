const displayRecord = () => {
    const products = getProduct();
    for (const product in products) {
        displayInUl(product,products[product])
    }
}
const addItem = () => {
    // input value 
    const productName = document.getElementById('productName').value;
    const productPrice = parseFloat(document.getElementById('productPrice').value);

    // for blank input 
    if (!productName || !productPrice) {
        return;
    }

    // appending li in UI
    displayInUl(productName,productPrice);

    // adding to localStorage 
    addingLocalStorage(productName,productPrice);

    // clearing input value 
    document.getElementById('productName').value = '';
    document.getElementById('productPrice').value = '';
}

const displayInUl = (pName,pPrice) => {
    const ul = document.getElementById('ul');
    const li = document.createElement('li');
    li.innerText = `${pName} : ${pPrice} tk`;
    ul.appendChild(li);
}

const getProduct = () => {
    const product = localStorage.getItem('product');
    let productObj;
    if (product) {
        productObj = JSON.parse(product);
    } else {
        productObj = {}
    }
    return productObj;
}

const addingLocalStorage = (pName,pPrice) => {
    const productDetails = getProduct();
    if (productDetails[pName]) {
        productDetails[pName] = productDetails[pName] + pPrice;
    } else {
        productDetails[pName] = pPrice;
    }
    
    const productStringify = JSON.stringify(productDetails);
    localStorage.setItem('product',productStringify);
}
displayRecord()







