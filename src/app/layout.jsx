import { Work_Sans } from "next/font/google";
// import { css } from "@emotion/css";
import "./globals.css";

const workSans = Work_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Pixellab Ecom Upsalla",
  description: "Our first ecommerce app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={workSans.className}>
        <div className="layout-grid">
          <header className="header">header</header>

          <div className="main-area">
            <main className="content">{children}</main>

            <footer className="footer">footer</footer>
          </div>
        </div>
      </body>
    </html>
  );
}
