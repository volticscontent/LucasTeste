const Footer = () => (
  <footer className="w-full bg-neutral-900 text-neutral-100 py-6 mt-8">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-4">
      <span className="text-sm">&copy; {new Date().getFullYear()} Power House Brasil. Todos os direitos reservados.</span>
      <div className="flex gap-4">
        <a href="#" className="hover:text-blue-400 transition-colors" tabIndex={0} aria-label="Instagram">Instagram</a>
        <a href="#" className="hover:text-blue-400 transition-colors" tabIndex={0} aria-label="Institucional">Institucional</a>
      </div>
    </div>
  </footer>
);

export default Footer; 