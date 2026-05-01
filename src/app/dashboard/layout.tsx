'use client';

import { cn } from '@/components/ui';
import AppSidebar, { ProjectName } from '@/components/layout';
import { FORGE } from '@/lib/data';
import { FiHome, FiUsers, FiCalendar, FiBarChart, FiDollarSign, FiStar } from 'lucide-react';

const navItems = [
  { icon: <FiHome size={16} />, label: 'Dashboard', href: '/dashboard' },
  { icon: <FiUsers size={16} />, label: 'Leads', href: '/dashboard/leads' },
  { icon: <FiCalendar size={16} />, label: 'Calendar', href: '/dashboard/calendar' },
  { icon: <FiBarChart size={16} />, label: 'Reports', href: '/dashboard/reports' },
  { icon: <FiDollarSign size={16} />, label: 'Sales', href: '/dashboard/sales' },
  { icon: <FiStar size={16} />, label: 'Settings', href: '/dashboard/settings' },
];

const projectName: ProjectName = 'Predictive Lead Scorer';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-zinc-50 pt-9">
      <AppSidebar items={navItems} projectName={projectName} />
      <div className="flex-1 ml-64 flex flex-col min-h-full">
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}