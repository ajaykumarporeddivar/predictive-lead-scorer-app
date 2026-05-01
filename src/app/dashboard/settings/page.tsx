'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Card, Button, Input, Badge } from '@/components/ui';
import { AppHeader } from '@/components/layout';
import { DEMO_USER } from '@/lib/data';

const tabs = ['Profile', 'Notifications', 'Appearance'];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [name, setName] = useState(DEMO_USER.name);
  const [email, setEmail] = useState(DEMO_USER.email);
  const [role, setRole] = useState(DEMO_USER.role);
  const [saved, setSaved] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    weeklyDigest: true,
  });
  const [theme, setTheme] = useState('system');
  const [language, setLanguage] = useState('en');

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col h-screen">
      <AppHeader />
      <div className="flex-1 p-4 overflow-y-auto">
        <Card>
          <div className="flex justify-between mb-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  'py-2 px-4 rounded-lg',
                  activeTab === tab
                    ? 'bg-zinc-900 text-white'
                    : 'bg-white text-zinc-600 hover:bg-zinc-100'
                )}
              >
                {tab}
              </button>
            ))}
          </div>
          {activeTab === 'Profile' && (
            <div>
              <Input
                type="text"
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                type="email"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="text"
                label="Role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
              <Button onClick={handleSave}>Save</Button>
              {saved && <Badge variant="success">Saved!</Badge>}
            </div>
          )}
          {activeTab === 'Notifications' && (
            <div>
              <div
                className="py-2 px-4 rounded-lg cursor-pointer"
                onClick={() =>
                  setNotifications((prev) => ({ ...prev, email: !prev.email }))
                }
              >
                <span className="mr-2">
                  <FiLoader className={cn(notifications.email ? 'text-green' : 'text-gray')} />
                </span>
                Email notifications
              </div>
              <div
                className="py-2 px-4 rounded-lg cursor-pointer"
                onClick={() =>
                  setNotifications((prev) => ({ ...prev, push: !prev.push }))
                }
              >
                <span className="mr-2">
                  <FiLoader className={cn(notifications.push ? 'text-green' : 'text-gray')} />
                </span>
                Push notifications
              </div>
              <div
                className="py-2 px-4 rounded-lg cursor-pointer"
                onClick={() =>
                  setNotifications((prev) => ({ ...prev, weeklyDigest: !prev.weeklyDigest }))
                }
              >
                <span className="mr-2">
                  <FiLoader className={cn(notifications.weeklyDigest ? 'text-green' : 'text-gray')} />
                </span>
                Weekly digest
              </div>
            </div>
          )}
          {activeTab === 'Appearance' && (
            <div>
              <div className="flex justify-between mb-4">
                <button
                  className={cn(
                    'py-2 px-4 rounded-lg',
                    theme === 'light' ? 'bg-zinc-900 text-white' : 'bg-white text-zinc-600'
                  )}
                  onClick={() => setTheme('light')}
                >
                  Light
                </button>
                <button
                  className={cn(
                    'py-2 px-4 rounded-lg',
                    theme === 'dark' ? 'bg-zinc-900 text-white' : 'bg-white text-zinc-600'
                  )}
                  onClick={() => setTheme('dark')}
                >
                  Dark
                </button>
                <button
                  className={cn(
                    'py-2 px-4 rounded-lg',
                    theme === 'system' ? 'bg-zinc-900 text-white' : 'bg-white text-zinc-600'
                  )}
                  onClick={() => setTheme('system')}
                >
                  System
                </button>
              </div>
              <div className="flex justify-between mb-4">
                <button
                  className={cn(
                    'py-2 px-4 rounded-lg',
                    language === 'en' ? 'bg-zinc-900 text-white' : 'bg-white text-zinc-600'
                  )}
                  onClick={() => setLanguage('en')}
                >
                  English
                </button>
                <button
                  className={cn(
                    'py-2 px-4 rounded-lg',
                    language === 'fr' ? 'bg-zinc-900 text-white' : 'bg-white text-zinc-600'
                  )}
                  onClick={() => setLanguage('fr')}
                >
                  French
                </button>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}