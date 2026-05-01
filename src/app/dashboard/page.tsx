'use client';

import {
  STATS,
  MOCK_LEADS,
  RECENT_ACTIVITY,
  DEMO_USER,
  CHART_DATA,
  SPARKLINE_DATA,
  formatDate,
  formatCurrency,
} from '@/lib/data';
import {
  StatCard,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Badge,
  Avatar,
  Table,
  Button,
} from '@/components/ui';
import { BarChart, Sparkline } from '@/components/charts';
import AppHeader from '@/components/layout';
import { useState } from 'react';
import { FiPlus } from 'lucide-react';

const [selectedRow, setSelectedRow] = useState(null);
const [activeTab, setActiveTab] = useState('overview');
const [toastMsg, setToastMsg] = useState('');
const [filter, setFilter] = useState('');

const handleRowClick = (row) => {
  setSelectedRow(row);
};

const handleToast = () => {
  setToastMsg('Action performed successfully!');
  setTimeout(() => {
    setToastMsg('');
  }, 2000);
};

export default function DashboardPage() {
  return (
    <div>
      <AppHeader
        title="Dashboard"
        subtitle={`Good morning, ${DEMO_USER.name}`}
        actions={<Button size="sm">+ New Lead</Button>}
      />
      <div className="grid grid-cols-4 gap-4 mt-6">
        {STATS.map((stat, index) => (
          <StatCard key={index} title={stat.title} value={stat.value} sparkline={SPARKLINE_DATA[index]} />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Lead Overview</CardTitle>
              <p className="text-zinc-400">Last 12 weeks</p>
            </CardHeader>
            <CardContent>
              <BarChart data={CHART_DATA.weekly} labels={CHART_DATA.labels} />
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              {RECENT_ACTIVITY.map((activity, index) => (
                <div key={index} className="flex items-center gap-3 py-2 border-b border-zinc-50 last:border-0">
                  <Avatar src={activity.user.avatar} />
                  <p className="text-zinc-600">{activity.action}</p>
                  <p className="text-zinc-400">{formatDate(activity.time)}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>All Leads</CardTitle>
          <input
            type="search"
            placeholder="Search leads..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="ml-4 text-zinc-600"
          />
          <Button size="sm" onClick={handleToast}>
            Export
          </Button>
        </CardHeader>
        <CardContent>
          <Table
            columns={[
              'Name',
              'Email',
              'Phone',
              'Status',
              'Last Updated',
            ]}
            rows={MOCK_LEADS.filter((lead) =>
              lead.name.toLowerCase().includes(filter.toLowerCase())
            ).map((lead) => [
              lead.name,
              lead.email,
              lead.phone,
              <Badge variant={lead.status}>{lead.status}</Badge>,
              formatDate(lead.lastUpdated),
            ])}
            onRowClick={handleRowClick}
          />
        </CardContent>
      </Card>
      <div className="flex gap-4 mt-6">
        <Button onClick={handleToast}>New Contract</Button>
        <Button onClick={handleToast}>Send Invoice</Button>
        <Button onClick={handleToast}>Run Report</Button>
      </div>
      {toastMsg && (
        <div className="fixed bottom-4 right-4 bg-zinc-900 text-white px-4 py-2 rounded-lg text-sm">
          {toastMsg}
        </div>
      )}
    </div>
  );
}