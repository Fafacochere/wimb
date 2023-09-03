import './globals.css';
import type { Metadata } from 'next';
import dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config({
    path: '.env.local',
  });
}

export const metadata: Metadata = {
  title: 'Wimb - Where is my beer',
  description: 'Juste une carte pour trouver ta bière autour de toi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
