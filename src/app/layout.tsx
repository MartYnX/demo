import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moon",
  description: "The moon",
  openGraph: {
    title: "Moon - A Beautiful Journey",
    description: "Explore the beauty and mysteries of the moon.",
    url: "https://votre-site.com",
    siteName: "Moon Project",
    images: [
      {
        url: "https://votre-site.com/moon-image.png", // Remplacez par l'URL de votre image
        width: 1200,
        height: 630,
        alt: "Moon illustration",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moon - A Beautiful Journey",
    description: "Explore the beauty and mysteries of the moon.",
    images: ["https://votre-site.com/moon-image.png"], // URL de l'image
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
