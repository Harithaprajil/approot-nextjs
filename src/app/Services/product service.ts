
const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://secure-creativity-35fee2e16d.strapiapp.com";

export class ProductService {
   

    static getProducts = async ()=>{
       var productResp= await fetch (`${API_URL}/api/products?populate=*`, { cache: "no-store" });
      var products = await productResp.json();
       return products;
    }
    static getProductById = async (id:number)=>{
        var productResps= await fetch (`${API_URL}/api/products/${id}?populate=*`, { cache: "no-store" });
        var product = await productResps.json();
        console.log("Response"+JSON.stringify(product.data))
        return product;
    }


}
