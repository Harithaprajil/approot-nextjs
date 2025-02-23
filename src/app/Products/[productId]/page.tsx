import { ProductService } from '@/app/Services/product service';

import prostyle from './productdetail.module.css'
import GoToCartButton from '@/app/Components/GoToCartButton';


export default async function ProductDetail(props:any) {
  console.log("Product list component is rendering!");
  const productId = props.params.productId;
  debugger
  var Product;
  var prod;
  if(productId){
    var Product = await ProductService.getProductById (productId);
    var prod = Product.data;
  }
 
  return (
    <div className="container">
        <div className={prostyle.prodetail}>
        <div className={prostyle.prodetailtable1}>
        {prod.Image.map((image:any, index:any) => (
          <img src={"http://localhost:1337"+image.formats?.thumbnail.url} key={index} height="250px" width="150px" alt="productimage" />
         ))}
        </div>
        <div className={prostyle.prodetailtable2}>
          <div className={prostyle.prodetailbox}>
            <b>{prod.Title}</b>
          </div>
          <div className={prostyle.prodetailbox} style={{ color: "red",  fontSize:"25px"}}>
            {"$"+prod.Price}
          </div>
          <div className={prostyle.prodetailbox}>{prod.Category}</div>
          <div className={prostyle.prodetailbox}>
            {prod.Description}
          </div>
          <div className={prostyle.prodetailbox}>
            {" "}
            <GoToCartButton product={prod} />

          </div>
       
        </div>

      </div>
    </div>
  )
}



