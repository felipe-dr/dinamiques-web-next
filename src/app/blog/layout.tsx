import type { Metadata } from 'next';

import { FooterComponent, HeaderComponent } from '@/components';

export const metadata: Metadata = {
  title: 'Dinamiques - Conhecimento ao Alcance de Todos',
  description:
    'Dinamiques é um blog acadêmico que aborda diversos temas educacionais, proporcionando conteúdo acessível e eficiente para quem busca aprender e se atualizar.',
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
