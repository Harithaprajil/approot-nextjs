
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export class ProductService {
   

    static getProducts = async ()=>{
       var productResp= await fetch (`${API_URL}/api/products`, { cache: "no-store" });
      var products = await productResp.json();
       return products;
    }
    static getProductById = async (id:number)=>{
        var productResps= await fetch (`${API_URL}/api/products/${id}`, { cache: "no-store" });
        var product = await productResps.json();
        return product;
    }


}
