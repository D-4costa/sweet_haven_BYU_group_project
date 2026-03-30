"use client";

import { useState } from "react";

export default function ProductCard({ product }: any) {
  const [favorite, setFavorite] = useState(false);

  return (
    <div className="card">
      <img src={product.image} alt={product.name} />

      <h3>{product.name}</h3>
      <p>${product.price}</p>

      <button onClick={() => setFavorite(!favorite)}>
        {favorite ? "❤️ Favorited" : "🤍 Add to favorites"}
      </button>
    </div>
  );
}
