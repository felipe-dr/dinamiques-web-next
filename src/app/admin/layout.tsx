import { Metadata } from 'next';

import {
  AdminSidebarComponent,
  SidebarProvider,
  SidebarTriggerComponent,
} from '@/components';

export const metadata: Metadata = {
  title: 'Dinamiques - Administração',
  description: 'Área administrativa do blog Dinamiques.',
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <SidebarProvider>
      <AdminSidebarComponent />
      <main className="w-full">
        <SidebarTriggerComponent className="bg-transparent" />
        {children}
      </main>
    </SidebarProvider>
  );
}
