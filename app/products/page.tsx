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

  const resetFilters = () => {
    setSearch("");
    setCategory("all");
  };

  return (
    <main className="page">
      <h1 className="title">Our Desserts 🍰</h1>

      {/* FILTERS */}
      <div className="filters">
        <input
          type="text"
          placeholder="Search desserts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All</option>
          <option value="cake">Cakes</option>
          <option value="cupcake">Cupcakes</option>
          <option value="drink">Drinks</option>
          <option value="premium">Premium</option>
        </select>

        <button onClick={resetFilters}>Reset</button>
      </div>

      {/* RESULTS COUNT */}
      <p style={{ marginTop: "10px" }}>
        {filteredProducts.length} desserts found
      </p>

      {/* PRODUCTS */}
      <div className="grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* EMPTY STATE */}
      {filteredProducts.length === 0 && (
        <p className="empty">
          No desserts found 😢 Try a different search or category.
        </p>
      )}
    </main>
  );
}
