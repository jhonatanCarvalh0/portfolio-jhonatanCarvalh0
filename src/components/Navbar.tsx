import React from 'react';

interface NavItem {
  link: string;
  label: string;
}

interface NavbarProps {
  logoSrc: string;
  logoAlt: string;
  navItems: NavItem[];
}

export const Navbar: React.FC<NavbarProps> = ({ logoSrc, logoAlt, navItems }) => {
  return (
    <header className="header-fixed -mt-14 mx-auto flex">
      <div className="w-full">
        <div className="flex justify-between">
          <div className="p-4">
            <a href="https://tamalsen.dev/" rel="home">
              <img src={logoSrc} alt={logoAlt} className="w-14" />
            </a>
          </div>
          <nav className="p-4">
            <ul className="flex space-x-4">
              {navItems.map((item, index) => (
                <li key={index} className="text-white text-opacity-75">
                  <a href={item.link}>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
