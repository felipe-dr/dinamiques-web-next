import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

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
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} text-lg text-base-5 antialiased`}>
        {children}
      </body>
    </html>
  );
}
