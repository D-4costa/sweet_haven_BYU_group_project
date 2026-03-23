"use client";

import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const [search, setSearch] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");
  const [category, setCategory] = useState("all");

  const filteredProducts = products.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());

    const matchPrice =
      priceFilter === "all" ||
      (priceFilter === "low" && p.price < 10) ||
      (priceFilter === "mid" && p.price >= 10 && p.price <= 15) ||
      (priceFilter === "high" && p.price > 15);

    const matchCategory =
      category === "all" || p.category === category;

    return matchSearch && matchPrice && matchCategory;
  });

  return (
    <main className="page">
      <h1 className="title">Dessert Catalog 🍰</h1>

      <div className="filters">
        <input
          placeholder="Search desserts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
        >
          <option value="all">All Prices</option>
          <option value="low">Under $10</option>
          <option value="mid">$10 - $15</option>
          <option value="high">$15+</option>
        </select>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="cake">Cakes</option>
          <option value="cupcake">Cupcakes</option>
          <option value="premium">Premium</option>
        </select>
      </div>

      <div className="grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))
        ) : (
          <p className="empty">No desserts found 😢</p>
        )}
      </div>
    </main>
  );
}
