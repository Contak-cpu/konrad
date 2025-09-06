import React, { useState } from 'react';

const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
);

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
);

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => ( 
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="currentColor" {...props}>
    <path d="M16.75 13.96c.25.13.4.38.4.66v1.48c0 .28-.15.53-.4.66C15.9 17.18 13.4 18 12 18c-3.3 0-6-2.7-6-6s2.7-6 6-6c.35 0 .68.04 1.01.1.28.05.5.28.5.56v1.48c0 .28-.23.51-.5.56-.25.04-.5.06-.75.06-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5c1.15 0 2.2-.56 2.85-1.42.17-.23.44-.38.74-.38h.96Z"/>
  </svg> 
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
  const phoneNumber = "+54 2954 47-5417";
  const whatsAppUrl = `https://wa.me/5492954475417`;

  const navLinks: { id: View; label: string }[] = [
    { id: 'home', label: 'Propiedades' },
    { id: 'requisitos', label: 'Requisitos' },
    { id: 'contacto', label: 'Contacto' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      {/* Barra superior con contacto */}
      <div className="bg-primary-900 text-white py-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm gap-2 sm:gap-0">
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4">
              <span className="flex items-center">📞 {phoneNumber}</span>
              <span className="flex items-center">✉️ consultas@konradinversiones.com</span>
            </div>
            <div className="text-center sm:text-right">
              <span className="hidden xs:inline">🏢 Av. Ameghino 602, Santa Rosa, La Pampa</span>
              <span className="xs:hidden">🏢 Santa Rosa, La Pampa</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Navegación principal */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a onClick={(e) => { e.preventDefault(); onViewChange('home'); }} className="flex-shrink-0 cursor-pointer flex items-center space-x-3">
            <img 
              src="https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-1/391612746_829589982355512_463664193374181098_n.jpg?stp=c62.0.885.885a_dst-jpg_s100x100_tt6&_nc_cat=104&ccb=1-7&_nc_sid=2d3e12&_nc_eui2=AeEiwcpSgZpKFdqjCd1WdESoMNxWswv7RC8w3FazC_tEL1TjuG3g0kpHocRjtjsKPtudLeRuiWoHPhxYB8KuPs9E&_nc_ohc=ikNR9wwt2OQQ7kNvwGtOUeN&_nc_oc=Adk0IVp9EHQgszEMCN6Ql_KJL6LFksCMNdIAhKitJUb-veXlDRlk6Ejd4mFHLGkbXYQ&_nc_zt=24&_nc_ht=scontent.fcor2-2.fna&_nc_gid=ILEJ9h206vgXNIWB6Ii2jQ&oh=00_AfZ4bqwHGtEYgBwNOZmwnJYsvtB8MQW-dBiVcj3fZnKN6w&oe=68C271A9" 
              alt="Konrad Inversiones Logo" 
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg object-cover shadow-sm"
            />
            <h1 className="text-xl sm:text-2xl font-bold text-primary-900">
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
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href={whatsAppUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              WhatsApp
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-primary-600" aria-label="Abrir menú">
              {isMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <nav className="flex flex-col py-4">
            {navLinks.map(link => (
              <NavLink key={link.id} viewId={link.id} currentView={currentView} onViewChange={onViewChange} onClick={() => setIsMenuOpen(false)}>
                {link.label}
              </NavLink>
            ))}
            <div className="px-3 py-2 mt-4 border-t">
              <a 
                href={whatsAppUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
