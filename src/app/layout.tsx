import KonamiCode from '@/libs/konami';
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  generator: 'Next.js', // Specifies the generator of the page
  applicationName: 'Demo',
  referrer: 'origin-when-cross-origin', // Controls the Referer HTTP header
  keywords: ['Next.js', 'JavaScript', 'Typescript', 'Template'], // Keywords for search engine optimization
  authors: [
    { name: 'MartYnX', url: 'https://github.com/MartYnX' },
  ],
  creator: 'MartYnX',
  publisher: 'MartYnX',
  formatDetection: { // Controls browser's feature detection for phone numbers, email addresses, etc.
    email: false,
    address: false,
    telephone: false,
  },

  metadataBase: new URL("https://demo-kohl-ten.vercel.app/"), // Base URL for relative URLs in metadata
  title: { // Page title configuration (in internet tab)
    absolute: "",
    default: "Demo | Menu",
    template: "Demo | %s",
  },
  description: "Few demo of what we can do with a nextJS project.",
  openGraph: { // Open Graph metadata for rich object in social sharing
    siteName: "Demo",
    title: {
      absolute: "",
      default: "Demo | Menu",
      template: "Demo | %s",
    },
    description: "Few demo of what we can do with a nextJS project.",
    url: "https://demo-kohl-ten.vercel.app/",
    images: [
      {
        url: "/images/shadu.png", // Remplacez par l'URL de votre image
        width: 1200,
        height: 630,
        alt: "Preview image for my website",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {// Twitter Card metadata for Twitter sharing
    title: {
      absolute: "",
      default: "Demo | Menu",
      template: "Demo | %s",
    },
    description: 'Few demo of what we can do with a nextJS project.',
    creator: 'MartYnX',
    card: "summary_large_image",
    images: ["/images/shadu.png"],
  },
  viewport: { // Viewport settings for responsive design
    width: "device-width", // Sets the viewport width to the device
    initialScale: 1, // Sets the initial zoom level
  },


  robots: { // Instructions for search engine crawlers
    index: true, // Allows search engines to index this page
    follow: true, // Allows search engines to follow links on this page
    nocache: true, // Instructs search engines not to cache this page

    googleBot: { // Specific instructions for Google's web crawler
      index: true, // Allows Google to index this page
      follow: true, // Allows Google to follow links on this page
      noimageindex: true, // Prevents Google from indexing images on this page
      'max-video-preview': -1, // Sets no limit on the length of video previews (-1 means no limit)
      'max-image-preview': 'large', // Allows large image previews in search results
      'max-snippet': -1, // Sets no limit on the length of text snippets in search results
    },
  },

  verification: { // Verification tokens for search engines
    google: "-C2AOMlMFUCju845ukk7pHM9Zhc09AYCekdn6gmjJfk", // https://search.google.com/search-console/about
    yandex: 'your yandex token',
    yahoo: 'your yahoo token',
  },


  icons: { // Favicon configuration (in internet tab)
    icon: [
      {
        rel: 'icon',
        url: '/paw.svg',
        type: 'image/png',
        media: '(prefers-color-scheme: light)',
      },
      {
        rel: 'icon',
        url: '/paw.svg',
        type: 'image/png',
        media: '(prefers-color-scheme: dark)',
      }
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <KonamiCode />
        {children}
      </body>
    </html>
  );
}