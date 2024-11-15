import type { Metadata } from 'next';

import { FooterComponent, HeaderComponent } from '@/components';

export const metadata: Metadata = {
  title: 'Dinamiques - Conhecimento ao Alcance de Todos',
  description:
    'Dinamiques é um blog acâdemico que reúne os mais diversos assuntos em um único local de forma acessível e eficiente para que qualquer um com vontade de aprender possa se integrar.',
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <>
      <HeaderComponent />
      {children}
      <FooterComponent />
    </>
  );
}
