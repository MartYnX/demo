import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Demo",
    template: "%s | demo",
  },
  openGraph: {
    siteName: "Demo",
    title: "Moon | Demo",
    description: "The moon",
    url: "https://demo-beta-woad.vercel.app/",
    images: [
      {
        url: "/shadu.png", // Remplacez par l'URL de votre image
        width: 1200,
        height: 630,
        alt: "Image de prévisualisation pour MonSiteWeb",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      {
        rel: 'icon',
        type: 'image/png',
        media: '(prefers-color-scheme: light',
        url: '/paw.svg',
      },
      {
        rel: 'icon',
        type: 'image/png',
        media: '(prefers-color-scheme: dark)',
        url: '/paw.svg'
      }
    ]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
