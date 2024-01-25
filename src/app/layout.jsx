import { Work_Sans } from 'next/font/google';
import './globals.css';
import { Footer, Header } from '@/components/common/server';

const workSans = Work_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Pixellab Ecom Upsalla',
  description: 'Our first ecommerce app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={workSans.className}>
        <div className="layout-grid">
          <header className="header">
            <Header></Header>
          </header>

          <div className="main-area">
            <main className="content">{children}</main>

            <footer className="footer">
              <Footer></Footer>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
