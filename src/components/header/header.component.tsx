import {
  ButtonSigninOrEnterAdminComponent,
  LogoComponent,
  NavigationMenuComponent,
} from '@/components';

export async function HeaderComponent(): Promise<JSX.Element> {
  const buttonSigninOrEnterAdminComponent =
    await ButtonSigninOrEnterAdminComponent();

  return (
    <header className="border-b border-b-base-14 bg-base-15">
      <div className="container flex max-w-screen-xl items-center justify-between py-5 lg:py-6">
        <LogoComponent />
        <NavigationMenuComponent
          buttonSigninOrEnterAdminComponent={buttonSigninOrEnterAdminComponent}
        />
      </div>
    </header>
  );
}
