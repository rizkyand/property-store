import type { Metadata } from "next";
import '@/asset/styles/global.css';


export const metadata: Metadata = {
  title: "Porperty Store | Find the Perfect Rental",
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
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
