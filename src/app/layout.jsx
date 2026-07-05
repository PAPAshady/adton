import './globals.css';
import Navbar from '@modules/Navbar/Navbar';
import Footer from '@modules/Footer/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="fa-IR" dir="rtl">
      <body>
        <div className="bg-ink font-primary text-paper min-h-screen overflow-x-hidden">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
