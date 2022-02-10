const url = "http://localhost:3000/api/products";

const getProducts = async(url) => {
    const response = await fetch(url);
    const articles = await response.json();

    articles.forEach((article) => displayProduct(article));
}

const displayProduct = (article) => {
    console.log(article);

    //Insertion de l'élement "a"
    let productLink = document.createElement("a");
    productLink.href = `product.html?id=${article._id}`;
    document.querySelector(".items").appendChild(productLink);

    // Insertion de l'élément "article"
    let productArticle = document.createElement("article");
    productLink.appendChild(productArticle);

    // Insertion de l'image
    let productImg = document.createElement("img");
    productImg.src = article.imageUrl;
    productImg.alt = article.altTxt;
    productArticle.appendChild(productImg);

    // Insertion du titre "h3"
    let productName = document.createElement("h3");
    productName.classList.add("productName");
    productName.innerHTML = article.name;
    productArticle.appendChild(productName);

    // Insertion de la description "p"
    let productDescription = document.createElement("p");
    productDescription.classList.add("productName");
    productDescription.innerHTML = article.description;
    productArticle.appendChild(productDescription);
};


getProducts(url);