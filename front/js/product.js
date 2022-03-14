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

    //let itemName= document.createElement("h1");
    //itemName.innerHTML=article.name;
    document.getElementById("title").innerHTML = article.name
    //.appendChild(itemName);

    //let itemPrice = document.createElement("p");
    //itemPrice.innerHTML=article.price;
    document.getElementById("price").innerHTML=article.price;
    //.appendChild(itemPrice);

    let itemDescription = document.createElement("p")
    itemDescription.innerHTML=article.description;
    document.getElementById("description").appendChild(itemDescription);
    
    
    article.colors.forEach((color) => {
        let colorSelect = document.createElement("option")
        colorSelect.innerHTML = color;
        colorSelect.value = color;
        document.querySelector("#colors").appendChild(colorSelect);
    });

    let button = document.getElementById("addToCart")
    button.addEventListener("click", () => {
        addCart(article)
})
}

getProduct();

const addCart=(article) => {
    
        let articleArray = JSON.parse(localStorage.getItem("article")) ?? null;

        let select=document.getElementById ("colors")
        let quantity=document.getElementById("quantity")

        console.log(quantity.value);
        console.log(articleArray);

console.log(article);

        if(articleArray===null){
            articleArray=[];
            pushCart(articleArray, article._id, select.value, quantity.value);  
        } 
        else {            
            pushCart(articleArray, article._id, select.value, quantity.value);         
        }
        

    
}
         
const pushCart = (articleArray, id, color, quantity) => {
    
    if (articleArray.some(articles => articles.id === id && articles.color === color)) {
        console.log('id et color présent');
        articleArray = articleArray.map(article => {
            if (article.id === id && article.color === color) {
                article.quantity += +quantity;
            }
            return article;
        });

        console.log('id et color présent');
        
    } else {
        const addDataToArray = {
            id: id,
            color: color,
            quantity: +quantity,
        };
        articleArray.push(addDataToArray);
    }

    localStorage.setItem("article",JSON.stringify(articleArray));
    

    
}

