import React from 'react'
import Productcard from '../Components/Product-Card/Productcard'
import { ProductService } from '../Services/product service'
import styles from '../Components/Product-Card/productcard.module.css'
import ProductFilter from '../Components/Product-Filter/ProductFilter'

interface SearchParams {
  Category?: string;
  Price?: number;
  search?: string; // Add support for search query param
}

// Accept `searchParams` with `search` added
export default async function Products({ searchParams }: { searchParams: SearchParams }) {
  const products = await ProductService.getProducts()
  let filteredProducts = products.data

  console.log("All Products: ", filteredProducts)

  // Filter by category if provided
  if (searchParams?.Category) {
    filteredProducts = filteredProducts?.filter((p: any) => p.Category === searchParams.Category)
  }

  // Filter by price if provided
  if (searchParams?.Price) {
    const price = searchParams.Price ?? 0;
    filteredProducts = filteredProducts?.filter((p: any) => p.Price <= price)
  }


  
  if (searchParams?.search) {
    const searchLower = searchParams.search.toLowerCase();
    filteredProducts = filteredProducts?.filter((p: any) => 
      p.Title.toLowerCase().includes(searchLower)
    );
}


  return (
    <div>
      <ProductFilter />
      <div className={styles.content}>
        {filteredProducts?.length > 0 ? (
          filteredProducts.map((p: any) => (
            <Productcard key={p.id} product={p} />
          ))
        ) : (
          <p>No products found matching your criteria.</p>
        )}
      </div>
    </div>
  )
}
