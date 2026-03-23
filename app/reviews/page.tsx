export default function Reviews() {
  const reviews = [
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
    {
      user: "Sofia",
      comment: "Best sweets marketplace ever!",
      rating: "⭐⭐⭐⭐",
    },
  ];

  return (
    <main className="page">
      <h1 className="title">Customer Reviews ⭐</h1>

      <div className="grid">
        {reviews.map((review, i) => (
          <div key={i} className="card">
            <h3>{review.user}</h3>
            <p>"{review.comment}"</p>
            <p>{review.rating}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
