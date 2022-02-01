const getProducts = async() => {
    const response = await fetch("http://localhost:3000/api/products");
    const data = await response.json();

    console.log(data);
    //Boucle produit
    data.forEach((product) => {
        console.log(product)
    });
}

const displayProduct = (product) => {
    console.log(product);
    // récupérer l'id de la section de l'index.html
    // création html d'un produit
}



getProducts();