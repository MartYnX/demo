import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Bienvenue sur la page d&apos;accueil</h1>
      <Link href="/moon">
        <button>Voir la Lune</button>
      </Link>
    </div>
  );
}