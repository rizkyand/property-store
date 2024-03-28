import type { Metadata } from "next";
import '@/asset/styles/globals.css'
import Navbar from "@/components/Navbar";
import icons from '@/asset/images/logo.png'
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Property Store | Find the Perfect Rental",
  description: "Find your dream rental property",
  keywords : 'rental, find rentals, find properties',
  icons : '@/asset/images/logo.png'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
