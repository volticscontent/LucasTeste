import Link from 'next/link';
import { useCart } from '../lib/useCart';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
  { href: '/shop', label: 'Produtos' },
  { href: '/about', label: 'Sobre' },
  { href: '/checkout', label: 'Checkout' },
];

const Header = () => {
  const { cartItems } = useCart();

  return (
    <header className="w-full bg-white border-b border-neutral-200 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl font-bold tracking-tight text-neutral-900" tabIndex={0} aria-label="Power House Brasil">
          Power House Brasil
        </Link>
        <nav>
          <ul className="flex gap-4 md:gap-6 items-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-neutral-700 hover:text-blue-600 transition-colors font-medium" tabIndex={0} aria-label={link.label}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/checkout" className="relative flex items-center ml-2" tabIndex={0} aria-label="Carrinho">
                <span className="text-2xl">🛒</span>
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full px-2 py-0.5 font-bold">
                    {cartItems.reduce((acc, item) => acc + ((item as any).quantity || 1), 0)}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 