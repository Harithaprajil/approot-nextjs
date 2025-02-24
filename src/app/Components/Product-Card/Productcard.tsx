
import React from 'react'
import styles from './productcard.module.css'
import Link from 'next/link';

export default function Productcard(props:any) {
    var prod = props.product;
    console.log("data  "+prod);
    
  
  return (
  <div>
<Link href={'/Products/'+prod.documentId}>
<div className={styles.box}>
  <div>
    {prod.Image?.map((image:any, index:any) => (
      <img src={image.formats?.thumbnail.url} key={index} height="250px" width="150px" alt="productimage" />
    ))}
  </div> 
  <div>
    <b>{prod.Title}</b>
  </div>
  <div>{prod.Category}</div>
  <div style={{ fontSize: "22px",color:"red" }}>${prod.Price}</div> 

</div>
</Link>
  </div>


  
  




  );
};


