"use client";

import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "all" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <h1>Our Desserts</h1>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search desserts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* FILTER */}
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="cake">Cakes</option>
        <option value="cookie">Cookies</option>
        <option value="drink">Drinks</option>
      </select>

      {/* PRODUCTS */}
      <div className="grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
