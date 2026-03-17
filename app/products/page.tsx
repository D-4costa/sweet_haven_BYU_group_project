"use client";

import { useState } from "react";

const desserts = [
  { name: "Chocolate Cake", price: 12 },
  { name: "Cupcakes", price: 8 },
  { name: "Macarons", price: 16 },
  { name: "Strawberry Cake", price: 14 },
];

export default function Products() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const filtered = desserts.filter((d) => {
    const matchSearch = d.name.toLowerCase().includes(search.toLowerCase());

    const matchPrice =
      filter === "all" ||
      (filter === "low" && d.price < 10) ||
      (filter === "mid" && d.price >= 10 && d.price <= 15) ||
      (filter === "high" && d.price > 15);

    return matchSearch && matchPrice;
  });

  return (
    <main className="catalog">
      <h1>Dessert Catalog</h1>

      <div className="filters">
        <input
          placeholder="Search desserts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All Prices</option>
          <option value="low">Under $10</option>
          <option value="mid">$10 - $15</option>
          <option value="high">$15+</option>
        </select>
      </div>

      <div className="grid">
        {filtered.map((item, i) => (
          <div key={i} className="card">
            <h3>{item.name}</h3>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
