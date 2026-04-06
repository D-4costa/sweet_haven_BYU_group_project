"use client";

import { useState } from "react";

export default function Reviews() {
  const [reviews, setReviews] = useState([
    {
      user: "Laura",
      comment: "Amazing desserts! Highly recommend!",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      user: "Miguel",
      comment: "The cupcakes were beautiful and delicious.",
      rating: "⭐⭐⭐⭐⭐",
    },
  ]);

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const addReview = () => {
    if (!name.trim() || !comment.trim()) return;

    const newReview = {
      user: name,
      comment,
      rating: "⭐⭐⭐⭐",
    };

    setReviews([newReview, ...reviews]);
    setName("");
    setComment("");
  };

  return (
    <main className="page">
      <h1 className="title">Customer Reviews ⭐</h1>

      {/* FORM */}
      <div className="card" style={{ marginBottom: "20px" }}>
        <h3>Add a Review</h3>

        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginBottom: "10px", width: "100%", padding: "8px" }}
        />

        <textarea
          placeholder="Your comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          style={{ marginBottom: "10px", width: "100%", padding: "8px" }}
        />

        <button onClick={addReview}>Submit</button>
      </div>

      {/* REVIEWS */}
      <div className="grid">
        {reviews.map((review, i) => (
          <div key={i} className="card">
            <h3>{review.user}</h3>
            <p>"{review.comment}"</p>
            <p>{review.rating}</p>
          </div>
        ))}
      </div>

      {/* EMPTY */}
      {reviews.length === 0 && (
        <p className="empty">No reviews yet.</p>
      )}
    </main>
  );
}
