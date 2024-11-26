const productList = await fetch("https://fakestoreapi.com/products");

const products = await productList.json();

for (const product of products) {

    console.log(`===== PRODUCT DETAILS.  ID: ${product.id} ====== `);

    console.log(`TITLE : ${product.title}`);

    console.log(`PRICE : ${product.price}`);

    console.log(`COUNT : ${product.rating.count}`);

    console.log("******************************"); 

}