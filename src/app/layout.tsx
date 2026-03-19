import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rasty — Pick smart. Live smarter.',
  description: 'Rasty builds focused software products that solve real problems.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
