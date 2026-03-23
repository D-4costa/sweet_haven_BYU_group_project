export default function Sellers() {
  const sellers = [
    {
      name: "Maria Lopez",
      specialty: "Cakes",
      rating: "⭐ 4.9",
    },
    {
      name: "John Kim",
      specialty: "Macarons",
      rating: "⭐ 4.8",
    },
    {
      name: "Ana Torres",
      specialty: "Cupcakes",
      rating: "⭐ 5.0",
    },
  ];

  return (
    <main className="page">
      <h1 className="title">Our Bakers 👩‍🍳</h1>

      <div className="grid">
        {sellers.map((seller, i) => (
          <div key={i} className="card">
            <h3>{seller.name}</h3>
            <p>Specialty: {seller.specialty}</p>
            <p>{seller.rating}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
