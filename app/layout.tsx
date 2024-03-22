import type { Metadata } from "next";
import '@/asset/styles/global.css';
import Navbar from "@/component/Navbar";


export const metadata: Metadata = {
  title: "Property Store | Find the Perfect Rental",
  description: "Find your dream rental property",
  keywords : 'rental, find rentals, find properties',
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
      </body>
    </html>
  );
}
