import '../styles/globals.css';
import Header from './components/Header';
import { Providers } from './providers';
import { unstable_getServerSession } from 'next-auth/next';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await unstable_getServerSession();
  return (
    <html>
      <head />
      <body>
        <Header />
        <Providers session={session}>{children}</Providers>
      </body>
    </html>
  );
}
