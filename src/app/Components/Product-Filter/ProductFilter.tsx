
"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function ProductFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  
  const currentCategory = searchParams.get("Category") || "";
  const currentPrice = searchParams.get("Price") || "";

  const [price, setPrice] = useState(currentPrice);

  const updateFilters = (Category?: string, Price?: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (Category !== undefined) {
      if (Category) {
        params.set("Category", Category);
      } else {
        params.delete("Category");
      }
    }

    if (Price !== undefined) {
      if (Price) {
        params.set("Price", Price);
      } else {
        params.delete("Price");
      }
    }

    router.push(`/Products?${params.toString()}`);
  };

  return (
    <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
      <div className="btn-group me-2" role="group" aria-label="Category Group">
        <button type="button" className={`btn btn-primary ${!currentCategory ? "active" : ""}`} onClick={() => updateFilters("")}>All</button>
        <button type="button" className={`btn btn-primary ${currentCategory === "mobile accessories" ? "active" : ""}`} onClick={() => updateFilters("mobile accessories")}>Mobile Accessories</button>
        <button type="button" className={`btn btn-primary ${currentCategory === "clothing" ? "active" : ""}`} onClick={() => updateFilters("clothing")}>Clothing</button>
        <button type="button" className={`btn btn-primary ${currentCategory === "beauty" ? "active" : ""}`} onClick={() => updateFilters("beauty")}>Beauty</button>
        <button type="button" className={`btn btn-primary ${currentCategory === "home and kitchen" ? "active" : ""}`} onClick={() => updateFilters("home and kitchen")}>Home & Kitchen</button>
      </div>

      
      <div className="input-group ms-3">
        <input
          type="number"
          className="form-control"
          placeholder="Max Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button className="btn btn-secondary" onClick={() => updateFilters(undefined, price)}>Apply</button>
        <button className="btn btn-danger" onClick={() => { setPrice(""); updateFilters(undefined, ""); }}>Clear</button>
      </div>
    </div>
  );
}
