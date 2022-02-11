const link =window.location.href;
const url = new URL (link);
const productId = url.searchParams.get("id");
console.log(productId)


const getProduct = async() => {
    const response = await fetch(`http://localhost:3000/api/products/${productId}`);
    const article = await response.json();
    console.log(article)
    displayProduct(article);
}

const displayProduct = (article) =>{
    let itemImg= document.createElement("img");
    itemImg.src= article.imageUrl;
    itemImg.alt = article.altTxt;
    document.querySelector(".item__img").appendChild(itemImg);

    let itemName= document.createElement("h1");
    itemName.innerHTML=article.name;
    document.getElementById("title").appendChild(itemName);

    let itemPrice = document.createElement("p");
    itemPrice.innerHTML=article.price;
    document.getElementById("price").appendChild(itemPrice);

    let itemDescription = document.createElement("p")
    itemDescription.innerHTML=article.description;
    document.getElementById("description").appendChild(itemDescription);

}


getProduct();

let dataArr = [];
let dataObj = {
    'name' : 'Tom'
};
dataArr.push(dataObj);
dataArr.push(dataObj);
dataArr.push(dataObj);
dataArr.push(dataObj);
dataArr.push(dataObj);
dataArr.push(dataObj);

localStorage.setItem('myCat', JSON.stringify(dataArr));

var cat = localStorage.getItem('myCat');
console.log(JSON.parse(cat));

//localStorage.removeItem('myCat');
//localStorage.clear();
