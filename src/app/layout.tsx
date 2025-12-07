import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'Fjellro - Luxury Norwegian Mountain Retreat',
  description: 'Experience the ultimate Norwegian mountain retreat in Syndin, Vestre Slidre. Luxury cabin rental with stunning views.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${playfair.variable}`}>
        <Navigation />
        <main style={{ paddingTop: '4rem' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}