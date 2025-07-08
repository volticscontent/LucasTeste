const Footer = () => (
  <footer className="w-full bg-neutral-50 text-neutral-800 py-8 mt-8 border-t border-neutral-200">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-4">
      <span className="text-sm">&copy; {new Date().getFullYear()} Power House Brasil. Todos os direitos reservados.</span>
      <div className="flex gap-4 items-center">
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" tabIndex={0} aria-label="Instagram Power House">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.5" y2="6.5" /></svg>
        </a>
        <a href="#" className="hover:text-accent transition-colors font-semibold" tabIndex={0} aria-label="Institucional">Institucional</a>
      </div>
    </div>
  </footer>
);

export default Footer; 