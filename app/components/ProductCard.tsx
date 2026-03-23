type Product = {
  name: string;
  price: number;
  image: string;
};

export default function ProductCard({ name, price, image }: Product) {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-img" />
      <h3>{name}</h3>
      <p>${price}</p>
    </div>
  );
}
