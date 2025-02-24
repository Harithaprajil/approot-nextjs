



'use client'

import React from 'react'
import { useCart } from '../context/CartContext';
import styles from './cart.module.css';

export default function CartPage() {
    const { cart , addToCart,removeFromCart} = useCart();

    return (
        <div>
            <h1>Your Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {[...cart].slice()
            .reverse().map((item) => (
              <div className={styles.carttable} key={item.id}>
              <div className={styles.cartbox1}>

                <div>
    {item.Image?.map((image:any, index:any) => (
      <img src={image.formats?.thumbnail.url} key={index} height="250px"  alt="productimage" />
    ))}
  </div> 
              </div>
              <div className={styles.cartbox2}>
                <div
                  className={styles.cartitembox}
                  style={{fontSize:"22px" }}
                >
                  <h5>{item.Title}</h5>
                </div>
                <div className={styles.cartitembox}>
                  <p style={{color:"red",fontSize:"25px"}}>{item.Price}</p>
                </div>
                <div className={styles.cartitembox}>
                    <div className={styles.cartbutton}>
                    <button className={styles.cartCount}
                        onClick={() => {
                          removeFromCart(item.id);
                        }}
                      >
                        -
                      </button>
                      <p>{item.quantity}</p>
                      <button className={styles.cartCount}
                        onClick={() => {
                          addToCart(item);
                        }}
                      >
                        +
                      </button>

                      <button className={styles.cartRemove}
                        onClick={() => {
                          removeFromCart(item.id);
                        }}
                      >
                        Remove
                      </button>
                      </div>

                      <div className={styles.cartplace}>
                        <div>
                        <p ><b>Total Amount :</b></p>
                        <div style={{color:"red",fontSize:"30px"}}>
                          {item.Price * item.quantity}
                        </div>
                        </div>
                        <button className={styles.placeOrder}>Place Order</button>
                      </div>

                 </div>
                 </div>
                 </div>
                
              
            ))}
            </div>
            )}
                </div>
            )
          }

