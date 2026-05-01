'use client';

import { cn } from '@/components/ui';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

export type ProjectName = string;

interface NavItem {
  icon: ReactNode;
  label: string;
  href: string;
}

interface AppSidebarProps {
  items: NavItem[];
  projectName: ProjectName;
}

export default function AppSidebar({ items, projectName }: AppSidebarProps) {
  const pathname = usePathname();
  return (
    <aside className="fixed left-0 top-9 w-64 h-[calc(100vh-2.25rem)] bg-white border-r border-zinc-200 flex flex-col">
      <div className="px-4 py-4 border-b border-zinc-100">
        <span className="font-semibold text-zinc-900 text-sm">{projectName}</span>
      </div>
      <nav className="flex-1 p-3 space-y-1">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors',
              pathname === item.href
                ? 'bg-zinc-900 text-white'
                : 'text-zinc-600 hover:bg-zinc-100'
            )}
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

interface AppHeaderProps {
  title?: string;
  subtitle?: string;
  actions?: ReactNode;
}

export function AppHeader({ title, subtitle, actions }: AppHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        {title && <h1 className="text-2xl font-bold text-zinc-900">{title}</h1>}
        {subtitle && <p className="text-zinc-500 text-sm mt-0.5">{subtitle}</p>}
      </div>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </div>
  );
}
