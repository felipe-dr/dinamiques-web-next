import { Inter } from 'next/font/google';

import { ReactQueryProvider } from '@/contexts';

import { ToasterComponent, ToastProvider } from '@/components';

import './styles/global.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

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
        <ReactQueryProvider>
          <ToastProvider>{children}</ToastProvider>
        </ReactQueryProvider>
        <ToasterComponent />
      </body>
    </html>
  );
}
