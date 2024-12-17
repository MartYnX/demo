import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  generator: 'Next.js',
  applicationName: 'Demo',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'JavaScript', 'Typescript', 'Template'],
  authors: [
    { name: 'MartYnX', url: 'https://github.com/MartYnX' },
  ],
  creator: 'MartYnX',
  publisher: 'MartYnX',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  metadataBase: new URL("https://demo-kohl-ten.vercel.app/"),
  title: {
    default: "Demo | Menu",
    template: "Demo | %s",
  },
  description: "Few demo of what we can do with a nextJS project.",
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

  twitter: {
    title: {
      absolute: "",
      default: "Demo | Menu",
      template: "Demo | %s"
    },
    description: 'Few demo of what we can do with a nextJS project.',
    creator: 'MartYnX',
    card: "summary_large_image",
    images: ["/shadu.png"],
  },
  viewport: {
    width: "device-width", // Définit la largeur du viewport à celle de l'appareil
    initialScale: 1, // Définit le niveau de zoom initial
  },


  robots: {
    index: true, // Indique si les moteurs de recherche doivent
    follow: true, // Indique si les moteurs de recherche doivent suivre les liens sur la page
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1, // Pas de limite pour l'aperçu vidéo
      'max-image-preview': 'large', // Utiliser une grande image pour l'aperçu
      'max-snippet': -1, // Pas de limite pour les extraits
    },
  },

  verification: {
    google: "-C2AOMlMFUCju845ukk7pHM9Zhc09AYCekdn6gmjJfk",
  },


  icons: {
    icon: [
      {
        rel: 'icon',
        type: 'image/png',
        media: '(prefers-color-scheme: light)',
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
