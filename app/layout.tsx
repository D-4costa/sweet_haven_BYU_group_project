import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="logo">🍰 Sweet Haven</div>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/products">Desserts</Link>
            <Link href="/sellers">Bakers</Link>
            <Link href="/reviews">Reviews</Link>
          </nav>
        </header>

        {children}

        <footer>
          <p>© 2026 Sweet Haven Marketplace</p>
        </footer>
      </body>
    </html>
  );
}
