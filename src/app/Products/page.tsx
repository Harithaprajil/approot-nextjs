import React from 'react'
import Productcard from '../Components/Product-Card/Productcard';
import { ProductService } from '../Services/product service';
import styles from '../Components/Product-Card/productcard.module.css'
import ProductFilter from '../Components/Product-Filter/ProductFilter';
import GoToCartButton from '../Components/GoToCartButton';


export default async function Products({ searchParams }: { searchParams: { Category?: string ;Price?: number}}) {
  const products = await ProductService.getProducts();
  
let filteredProducts = products.data;

  if(searchParams.Category){
    filteredProducts= filteredProducts.filter((p: any) => p.Category === searchParams.Category);

  }
  if (searchParams.Price) {
    filteredProducts = filteredProducts.filter((p: any) => p.Price <= searchParams.Price);
  }


  return (
    <div>

      <ProductFilter />
      <div className={styles.content}>
      {filteredProducts.map((p: any) => (
          <Productcard key={p.id} product={p} />

        ))}

      
      </div>
    </div>
  );
}
