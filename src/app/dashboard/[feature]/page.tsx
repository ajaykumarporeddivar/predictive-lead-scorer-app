'use client';

import { useParams } from 'next/navigation';

import { cn } from '@/components/ui';
import { MOCK_LEADS, MOCK_COMPANIES, MOCK_CONTRACTS } from '@/lib/data';
import { FiUser, FiBriefcase, FiFileText } from 'lucide-react';
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  Badge,
  Modal,
  Avatar,
  StatCard,
} from '@/components/ui';

const params = useParams();
const slug = (params.feature as string) ?? '';

const featureViews = {
  leads: (
    <div>
      <h1 className="font-bold text-zinc-900 tracking-tight">Lead Manager</h1>
      <p className="text-zinc-600">Manage your leads here</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {MOCK_LEADS.map((lead) => (
          <Card key={lead.id}>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Avatar src={lead.avatar} />
                <div>
                  <h2 className="font-bold text-zinc-900">{lead.name}</h2>
                  <p className="text-zinc-600">{lead.company}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-zinc-600">{lead.description}</p>
              <Badge variant="success" className="mt-2">
                {lead.status}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>
      <Button variant="primary" className="mt-4">
        New Lead
      </Button>
    </div>
  ),
  companies: (
    <div>
      <h1 className="font-bold text-zinc-900 tracking-tight">Company Manager</h1>
      <p className="text-zinc-600">Manage your companies here</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {MOCK_COMPANIES.map((company) => (
          <Card key={company.id}>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Avatar src={company.logo} />
                <div>
                  <h2 className="font-bold text-zinc-900">{company.name}</h2>
                  <p className="text-zinc-600">{company.industry}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-zinc-600">{company.description}</p>
              <Badge variant="success" className="mt-2">
                {company.status}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>
      <Button variant="primary" className="mt-4">
        New Company
      </Button>
    </div>
  ),
  contracts: (
    <div>
      <h1 className="font-bold text-zinc-900 tracking-tight">Contract Manager</h1>
      <p className="text-zinc-600">Manage your contracts here</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {MOCK_CONTRACTS.map((contract) => (
          <Card key={contract.id}>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Avatar src={contract.logo} />
                <div>
                  <h2 className="font-bold text-zinc-900">{contract.name}</h2>
                  <p className="text-zinc-600">{contract.description}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-zinc-600">{contract.status}</p>
              <Badge variant="success" className="mt-2">
                {contract.status}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>
      <Button variant="primary" className="mt-4">
        New Contract
      </Button>
    </div>
  ),
};

function FeaturePage() {
  if (!slug) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <h2 className="font-bold text-zinc-900">Leads</h2>
          </CardHeader>
          <CardContent>
            <p className="text-zinc-600">Manage your leads here</p>
            <Button variant="primary" className="mt-4">
              Open →
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <h2 className="font-bold text-zinc-900">Companies</h2>
          </CardHeader>
          <CardContent>
            <p className="text-zinc-600">Manage your companies here</p>
            <Button variant="primary" className="mt-4">
              Open →
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <h2 className="font-bold text-zinc-900">Contracts</h2>
          </CardHeader>
          <CardContent>
            <p className="text-zinc-600">Manage your contracts here</p>
            <Button variant="primary" className="mt-4">
              Open →
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return featureViews[slug] ?? <div>Feature not found</div>;
}

export default FeaturePage;