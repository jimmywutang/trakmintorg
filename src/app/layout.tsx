import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import Script from 'next/script';
import { GoogleAnalytics } from '@next/third-parties/google'


export const metadata: Metadata = {
  title: 'TRAKMINT',
  description: 'Reclaim your funds and fight back against scammers.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
       <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Lexend:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
     
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
        <GoogleAnalytics gaId="G-X5Z4SVRHV3" />
        <script src="https://analytics.ahrefs.com/analytics.js" data-key="0fRSxYXV2FAPynCMexr10w" async></script>
        <script id="chatway" async="true" src="https://cdn.chatway.app/widget.js?id=IccX7SGq0Ppz"></script>      </body>
    </html>
  );
}
