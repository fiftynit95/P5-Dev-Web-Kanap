let addArticle = JSON.parse(localStorage.getItem("article"));

const cartDisplay = async (addArticle) => {
    if(addArticle){
        await addArticle;
        console.log(addArticle);
    }
    let cartArticle= document.createElement("article");
    cartArticle.className= "cart__item";
    document.querySelector("#cart__items").appendChild(cartArticle);
}

cartDisplay()