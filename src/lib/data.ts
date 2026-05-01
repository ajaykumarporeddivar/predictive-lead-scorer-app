export const DEMO_USER = {
  name: 'Alex Johnson',
  email: 'alex@example.com',
  role: 'Sales Manager',
  avatar: '',
};

export const STATS = [
  { title: 'Total Leads', value: '1,284', change: '+12%' },
  { title: 'Qualified', value: '342', change: '+8%' },
  { title: 'Converted', value: '89', change: '+23%' },
  { title: 'Revenue', value: '$124,500', change: '+15%' },
];

export const SPARKLINE_DATA = [
  [4, 7, 5, 9, 6, 8, 11],
  [3, 5, 4, 6, 8, 7, 9],
  [2, 4, 3, 7, 5, 8, 10],
  [5, 6, 8, 7, 9, 11, 13],
];

export const MOCK_LEADS = [
  { id: '1', name: 'Sarah Chen', email: 'sarah@techcorp.com', phone: '555-0101', company: 'TechCorp', status: 'qualified', lastUpdated: '2024-01-15T10:00:00Z', description: 'Enterprise software buyer', avatar: '' },
  { id: '2', name: 'Marcus Webb', email: 'marcus@growfast.io', phone: '555-0102', company: 'GrowFast', status: 'new', lastUpdated: '2024-01-14T14:30:00Z', description: 'Startup growth lead', avatar: '' },
  { id: '3', name: 'Priya Patel', email: 'priya@nexusco.com', phone: '555-0103', company: 'NexusCo', status: 'contacted', lastUpdated: '2024-01-13T09:15:00Z', description: 'Mid-market buyer', avatar: '' },
  { id: '4', name: 'David Kim', email: 'david@scaleworks.com', phone: '555-0104', company: 'ScaleWorks', status: 'qualified', lastUpdated: '2024-01-12T16:45:00Z', description: 'Series B startup', avatar: '' },
  { id: '5', name: 'Emma Torres', email: 'emma@cloudbase.net', phone: '555-0105', company: 'CloudBase', status: 'converted', lastUpdated: '2024-01-11T11:20:00Z', description: 'Cloud infrastructure team', avatar: '' },
];

export const MOCK_COMPANIES = [
  { id: '1', name: 'TechCorp', industry: 'Software', status: 'active', description: 'Enterprise software solutions', logo: '' },
  { id: '2', name: 'GrowFast', industry: 'Marketing', status: 'prospect', description: 'Growth marketing platform', logo: '' },
  { id: '3', name: 'NexusCo', industry: 'Finance', status: 'active', description: 'Financial services platform', logo: '' },
];

export const MOCK_CONTRACTS = [
  { id: '1', name: 'Enterprise License Q1', description: 'Annual enterprise license', status: 'active', logo: '' },
  { id: '2', name: 'SMB Package 2024', description: 'Small business package', status: 'pending', logo: '' },
  { id: '3', name: 'Startup Bundle', description: 'Startup tier subscription', status: 'active', logo: '' },
];

export const RECENT_ACTIVITY = [
  { user: { avatar: '' }, action: 'Sarah Chen moved to qualified', time: '2024-01-15T10:00:00Z' },
  { user: { avatar: '' }, action: 'New lead Marcus Webb added', time: '2024-01-14T14:30:00Z' },
  { user: { avatar: '' }, action: 'Emma Torres converted', time: '2024-01-14T11:00:00Z' },
  { user: { avatar: '' }, action: 'Call scheduled with David Kim', time: '2024-01-13T16:00:00Z' },
];

export const CHART_DATA = {
  weekly: [42, 58, 35, 72, 61, 88, 54, 76, 93, 68, 85, 71],
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
};

export const FORGE = {
  version: '1.0.0',
  agents: 9,
};

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);
}
