import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://demo-kohl-ten.vercel.app/"),
  title: {
    absolute: "",
    default: "Demo | Menu",
    template: "Demo | %s",
  },
  openGraph: {
    siteName: "Demo",
    title: {
      default: "Demo | Menu",
      template: "Demo | %s"
    },
    description: "Few demo of what we can do with a nextJS project.",
    url: "https://demo-kohl-ten.vercel.app/",
    images: [
      {
        url: "/shadu.png", // Remplacez par l'URL de votre image
        width: 1200,
        height: 630,
        alt: "Preview image for my website",
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
