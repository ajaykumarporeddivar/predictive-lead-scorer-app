import { Inter, inter } from 'next/font/google';

const metadata = {
  title: 'Predictive Lead Scorer — Optimize Your Sales Pipeline',
  description: 'Identify high-quality leads and prioritize your outreach efforts with data-driven insights',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="bg-zinc-50 antialiased">
        <div className="fixed top-0 z-50 bg-zinc-900 text-zinc-100 text-xs">
          <div className="px-4 py-2 flex justify-between items-center">
            Predictive Lead Scorer - Demo Mode
            <a href="/dashboard" className="text-zinc-100 hover:text-zinc-200">
              Open Dashboard →
            </a>
          </div>
        </div>
        <div className="pt-9">{children}</div>
      </body>
    </html>
  );
}