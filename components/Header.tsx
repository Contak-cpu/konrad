import React, { useState } from 'react';

const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
);

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
);

type View = 'home' | 'requisitos' | 'contacto';

interface HeaderProps {
    onViewChange: (view: View) => void;
    currentView: View;
}

const NavLink: React.FC<{ viewId: View; currentView: View; onViewChange: (id: View) => void; children: React.ReactNode; onClick?: () => void;}> = 
({ viewId, currentView, onViewChange, children, onClick }) => {
    const isActive = currentView === viewId;
    const classes = `text-gray-600 hover:text-primary-600 transition-colors px-3 py-2 rounded-md cursor-pointer ${isActive ? 'font-bold text-primary-600' : ''}`;
    
    return (
        <a onClick={(e) => { e.preventDefault(); onViewChange(viewId); if(onClick) onClick(); }} className={classes}>
            {children}
        </a>
    );
};

const Header: React.FC<HeaderProps> = ({ onViewChange, currentView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks: { id: View; label: string }[] = [
    { id: 'home', label: 'Propiedades' },
    { id: 'requisitos', label: 'Requisitos' },
    { id: 'contacto', label: 'Contacto' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a onClick={(e) => { e.preventDefault(); onViewChange('home'); }} className="flex-shrink-0 cursor-pointer">
            <h1 className="text-2xl font-bold text-primary-900">
              Konrad <span className="font-light text-primary-600">Inversiones</span>
            </h1>
          </a>
          <nav className="hidden md:flex md:space-x-1">
            {navLinks.map(link => (
              <NavLink key={link.id} viewId={link.id} currentView={currentView} onViewChange={onViewChange}>
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-primary-600" aria-label="Abrir menú">
              {isMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col items-center space-y-2 py-4">
            {navLinks.map(link => (
              <NavLink key={link.id} viewId={link.id} currentView={currentView} onViewChange={onViewChange} onClick={() => setIsMenuOpen(false)}>
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
