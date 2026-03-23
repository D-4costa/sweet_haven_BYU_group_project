import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <h1>Handcrafted Desserts Marketplace 🍰</h1>
        <p>
          Discover cakes, pastries, and sweets made with love by talented bakers.
        </p>

        <Link className="btn" href="/products">
          Browse Desserts
        </Link>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="feature">
          <h3>🎂 Handmade Cakes</h3>
          <p>Unique cakes crafted by passionate bakers.</p>
        </div>

        <div className="feature">
          <h3>🧁 Artisan Cupcakes</h3>
          <p>Beautiful cupcakes perfect for celebrations.</p>
        </div>

        <div className="feature">
          <h3>🍓 Fresh Ingredients</h3>
          <p>Every dessert is made using quality ingredients.</p>
        </div>
      </section>

      {/* FEATURED */}
      <section className="highlight">
        <h2 className="title">Featured Desserts</h2>

        <div className="grid">
          {/* CARD 1 */}
          <div className="card">
<Image
  src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&auto=format"
  alt="Strawberry Shortcake"
  width={400}
  height={250}
  className="card-img"
/>
            <h3>Strawberry Shortcake</h3>
            <p>$14</p>
          </div>

          {/* CARD 2 */}
          <div className="card">
            <Image
              src="https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&auto=format"
              alt="Macaron Collection"
              width={400}
              height={250}
              className="card-img"
            />
            <h3>Macaron Collection</h3>
            <p>$16</p>
          </div>

          {/* CARD 3 */}
          <div className="card">
            <Image
              src="https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&auto=format"
              alt="Chocolate Cupcakes"
              width={400}
              height={250}
              className="card-img"
            />
            <h3>Chocolate Cupcakes</h3>
            <p>$10</p>
          </div>
        </div>

        {/* CTA EXTRA */}
        <div style={{ marginTop: "30px" }}>
          <Link className="btn" href="/products">
            View Full Catalog →
          </Link>
        </div>
      </section>
    </main>
  );
}
