import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '../lib/useCart';
import React from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
  { href: '/shop', label: 'Produtos' },
  { href: '/about', label: 'Sobre' },
  { href: '/checkout', label: 'Checkout' },
];

const Header = () => {
  const { cartItems } = useCart();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleMenu = () => setMenuOpen((open) => !open);
  const handleKeyDownMenu = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') handleToggleMenu();
  };

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${scrolled ? 'bg-primary/80 backdrop-blur shadow-lg' : 'bg-primary'} border-b border-primary`}
      tabIndex={-1}
      aria-label="Cabeçalho do site"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 h-14 md:h-16">
        <Link href="/" className="flex items-center gap-2" tabIndex={0} aria-label="Power House Brasil">
          <Image src="/img/static/logo.png" alt="Logo Power House Brasil" width={40} height={40} className="rounded-full" />
          <span className="hidden md:inline text-xl font-extrabold tracking-tight text-white">Power House Brasil</span>
        </Link>
        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="flex gap-4 md:gap-6 items-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white hover:text-accent transition-colors font-semibold px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
                  tabIndex={0}
                  aria-label={link.label}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/checkout"
                className="relative flex items-center ml-2 text-white hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
                tabIndex={0}
                aria-label="Carrinho"
              >
                <span className="text-2xl">🛒</span>
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-accent text-primary text-xs rounded-full px-2 py-0.5 font-bold">
                    {cartItems.reduce((acc, item) => acc + ((item as any).quantity || 1), 0)}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
          onClick={handleToggleMenu}
          onKeyDown={handleKeyDownMenu}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          tabIndex={0}
        >
          <span className="sr-only">Abrir menu</span>
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
        </button>
      </div>
      {/* Mobile dropdown */}
      {menuOpen && (
        <nav className="md:hidden bg-primary/95 backdrop-blur shadow-lg px-4 py-4" aria-label="Menu mobile">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-white hover:text-accent transition-colors font-semibold px-2 py-2 rounded focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
                  tabIndex={0}
                  aria-label={link.label}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/checkout"
                className="relative flex items-center text-white hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
                tabIndex={0}
                aria-label="Carrinho"
                onClick={() => setMenuOpen(false)}
              >
                <span className="text-2xl">🛒</span>
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-accent text-primary text-xs rounded-full px-2 py-0.5 font-bold">
                    {cartItems.reduce((acc, item) => acc + ((item as any).quantity || 1), 0)}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header; 