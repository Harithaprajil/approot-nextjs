import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
    <img src="https://marketplace.canva.com/EAFvDRwEHHg/1/0/1600w/canva-colorful-abstract-online-shop-free-logo-cpI8ixEpis8.jpg" alt="Bootstrap" width="90" height="60"/>

    </a>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
           <Link className="nav-link active" href="/">Home</Link>

        </li>
        <li className="nav-item">
        <Link className="nav-link" href="/Products">Products</Link>
          
        </li>
        <li className="nav-item">
        <Link className="nav-link" href="/ContactUs">ContactUs</Link>
          
        </li>
        <li className="nav-item">
        <Link className="nav-link" href="/AboutUs">AboutUs</Link>
          
        </li>   
        <li className="nav-item">
        <Link className="nav-link" href="/Cart">Cart</Link>
          
        </li>   
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
