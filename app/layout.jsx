import './globals.css';
import Providers from '../components/Providers';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import Script from 'next/script';

export const metadata = {
  title: 'Webhack Solutions – #1 Digital Media and Marketing Agency',
  description: 'Webhack Solutions is a leading digital media and marketing agency specializing in innovative solutions that drive real results.',
  keywords: 'Webhack Solutions, Digital Media, Marketing Agency, Digital Marketing, Social Media Marketing, SEO, Content Marketing, Branding, Web Development, Digital Strategy',
  authors: [{ name: 'Webhack Solutions' }],
  robots: 'index, follow',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/CSLogo.ico" type="image/x-icon" />
      </head>
      <body>
        <Providers>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <BackToTop />
        </Providers>
        <Script 
          src="https://checkout.razorpay.com/v1/checkout.js" 
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
