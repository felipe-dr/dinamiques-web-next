import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { FooterComponent, HeaderComponent } from '@/components';

import './styles/global.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dinamiques - Conhecimento ao Alcance de Todos',
  description:
    'Dinamiques é um blog acâdemico que reúne os mais diversos assuntos em um único local de forma acessível e eficiente para que qualquer um com vontade de aprender possa se integrar.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.className} bg-base-16 text-lg text-base-5 antialiased`}
      >
        <HeaderComponent />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
