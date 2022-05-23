//store the products array in localstorage as "products"
let products = JSON.parse(localStorage.getItem("products")) || [];
function show(){
    window.location.href = "inventory.html";
}

function Product(type,desc,price,image){
    
    this.type = type;
    this.desc = desc;
    this.price = price;
    this.image = image;

}

function add(){
    event.preventDefault();
    
    let form = document.querySelector("form");

    let type = form.type.value;
    let desc = form.desc.value;
    let price = form.price.value;
    let image = form.image.value;

    // console.log(type,desc,price,image);

    let p = new Product(type,desc,price,image);
    // console.log(p);
    products.push(p);

    // console.log(products);

    localStorage.setItem("products", JSON.stringify(products));

    location.reload();

}