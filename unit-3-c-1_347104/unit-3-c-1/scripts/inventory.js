function addmore(){
    window.location.href = "index.html"
}

let container = document.getElementById("all_products");

let products = JSON.parse(localStorage.getItem("products")) || [];

products.forEach(function(e,i) {
    
    let div = document.createElement("div");

    let type = document.createElement("p");
    type.innerText = e.type;

    let desc = document.createElement("p");
    desc.innerText = e.desc;

    let price = document.createElement("p");
    price.innerText = e.price;

    let image = document.createElement("img");
    image.src = e.image;
    
    let btn = document.createElement("button");
    btn.innerText = "Remove product";
    btn.setAttribute("id", "remove_product")
    btn.addEventListener("click", function(){
        remove(i);
        location.reload();
    })

    div.append(image,type,desc,price,btn);
    container.append(div);
});

function remove(i){
    // console.log(i);

    products.splice(i,1);

    localStorage.setItem("products",JSON.stringify(products));
}
