"use client";

import { useState } from "react";

export default function Sellers() {
  const [filter, setFilter] = useState("all");

  const sellers = [
    { name: "Maria Lopez", specialty: "cake", rating: "⭐ 4.9" },
    { name: "John Kim", specialty: "premium", rating: "⭐ 4.8" },
    { name: "Ana Torres", specialty: "cupcake", rating: "⭐ 5.0" },
  ];

  const filteredSellers =
    filter === "all"
      ? sellers
      : sellers.filter((s) => s.specialty === filter);

  return (
    <main className="page">
      <h1 className="title">Our Bakers 👩‍🍳</h1>

      {/* FILTER */}
      <div className="filters">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="cake">Cakes</option>
          <option value="cupcake">Cupcakes</option>
          <option value="premium">Premium</option>
        </select>
      </div>

      {/* SELLERS */}
      <div className="grid">
        {filteredSellers.map((seller, i) => (
          <div key={i} className="card">
            <h3>{seller.name}</h3>
            <p>Specialty: {seller.specialty}</p>
            <p>{seller.rating}</p>
            <button>View Profile</button>
          </div>
        ))}
      </div>

      {/* EMPTY */}
      {filteredSellers.length === 0 && (
        <p className="empty">No sellers found.</p>
      )}
    </main>
  );
}
