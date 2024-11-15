import {
  ArrowLeftEndOnRectangleIcon,
  DocumentTextIcon,
  HomeIcon,
  TagIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

import {
  SidebarComponent,
  SidebarContentComponent,
  SidebarFooterComponent,
  SidebarGroupComponent,
  SidebarGroupContentComponent,
  SidebarGroupLabelComponent,
  SidebarHeaderComponent,
  SidebarMenuButtonComponent,
  SidebarMenuComponent,
  SidebarMenuItemComponent,
} from '@/components';

const ADMIN_SIDEBAR_ITEMS = [
  {
    label: 'categorias',
    path: '/admin/categories',
    icon: TagIcon,
  },
  {
    label: 'artigos',
    path: '/admin/articles',
    icon: DocumentTextIcon,
  },
];

export function AdminSidebarComponent(): JSX.Element {
  return (
    <SidebarComponent>
      <SidebarHeaderComponent />
      <SidebarContentComponent>
        <SidebarMenuComponent>
          <SidebarMenuItemComponent className="capitalize">
            <SidebarMenuButtonComponent asChild>
              <Link href="/admin">
                <HomeIcon /> Início
              </Link>
            </SidebarMenuButtonComponent>
          </SidebarMenuItemComponent>
        </SidebarMenuComponent>
        <SidebarGroupComponent>
          <SidebarGroupLabelComponent>Gestão</SidebarGroupLabelComponent>
          <SidebarGroupContentComponent>
            <SidebarMenuComponent>
              {ADMIN_SIDEBAR_ITEMS.map((item) => (
                <SidebarMenuItemComponent
                  className="capitalize"
                  key={item.label}
                >
                  <SidebarMenuButtonComponent asChild>
                    <Link href={item.path}>
                      <item.icon />
                      {item.label}
                    </Link>
                  </SidebarMenuButtonComponent>
                </SidebarMenuItemComponent>
              ))}
            </SidebarMenuComponent>
          </SidebarGroupContentComponent>
        </SidebarGroupComponent>
      </SidebarContentComponent>
      <SidebarFooterComponent className="flex-row justify-between px-2 text-sm">
        <span>João Silva</span>
        <button type="button">
          <ArrowLeftEndOnRectangleIcon className="size-5" />
        </button>
      </SidebarFooterComponent>
    </SidebarComponent>
  );
}
