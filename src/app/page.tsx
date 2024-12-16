import Moon from "./demo/moon";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mon Aperçu Personnalisé</title>
        <meta property="og:title" content="Titre de votre projet" />
        <meta
          property="og:description"
          content="Description qui apparaît avec votre aperçu."
        />
        <meta property="og:url" content="https://votre-site.com" />
        <meta
          property="og:image"
          content="https://votre-site.com/chemin-vers-image.png"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Moon />
    </div>
  );
}