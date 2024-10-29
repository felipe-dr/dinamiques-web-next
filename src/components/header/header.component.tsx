import { LogoComponent } from '../logo/logo.component';
import { NavigationMenuComponent } from '../navigation-menu/navigation-menu.component';

export function HeaderComponent(): JSX.Element {
  return (
    <header className="border-b border-b-base-14 bg-base-15">
      <div className="container flex max-w-screen-xl items-center justify-between py-5 lg:py-6">
        <LogoComponent />
        <NavigationMenuComponent />
      </div>
    </header>
  );
}
