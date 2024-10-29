'use client';

import { useEffect, useState } from 'react';

import { MobileMenuButtonComponent } from '../mobile-menu-button/mobile-menu-button.component';
import { NavigationMenuLinkComponent } from '../navigation-menu-link/navigation-menu-link.component';
import { Button as ButtonComponent } from '../ui/button';

const NAVIGATION_MENU_ITEMS = [
  {
    label: 'blog',
    path: '/blog',
  },
  {
    label: 'sobre',
    path: '#',
  },
];

export function NavigationMenuComponent(): JSX.Element {
  const [showNavigationMenu, setShowNavigationMenu] = useState<boolean>(false);

  const handleShowNavigationMenu = () => {
    setShowNavigationMenu(!showNavigationMenu);
  };

  useEffect(() => {
    document.body.style.overflowY = showNavigationMenu ? 'hidden' : 'auto';
  }, [showNavigationMenu]);

  const navigationMenuState = { showNavigationMenu, handleShowNavigationMenu };

  return (
    <>
      <MobileMenuButtonComponent navigationMenuState={navigationMenuState} />
      <nav
        className={`${showNavigationMenu ? 'block' : 'hidden'} absolute left-0 top-[5.188rem] size-full bg-base-15 py-5 md:hidden`}
      >
        <ul>
          {NAVIGATION_MENU_ITEMS.map((menuItem) => (
            <NavigationMenuLinkComponent
              menuItem={menuItem}
              key={menuItem.label}
              onClick={() => setShowNavigationMenu(false)}
            />
          ))}
        </ul>
      </nav>
      <nav className="hidden md:block">
        <ul className="flex items-center justify-center md:gap-5">
          {NAVIGATION_MENU_ITEMS.map((menuItem) => (
            <NavigationMenuLinkComponent
              key={menuItem.label}
              menuItem={menuItem}
            />
          ))}
        </ul>
      </nav>
      <ButtonComponent className="hidden md:block">Entrar</ButtonComponent>
    </>
  );
}
