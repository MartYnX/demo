'use client'

import Link from 'next/link';
import React from 'react';

export default function Home() {

  const preventContextMenu = (e: React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault(); // Empêche l'ouverture du menu contextuel (clic droit)
  };

  return (
    <div>
      <h1>Bienvenue sur la page d&apos;accueil</h1>
      <Link href="/moon">
        <button>Voir la Lune</button>
      </Link>
      <Link href="/glitch">
        <button>???</button>
      </Link>
      <div className='nocopy'>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A quaerat omnis atque. Id repellat molestiae sequi autem tempora consectetur voluptatibus pariatur, maxime, aliquid laborum debitis cupiditate eos ipsum dignissimos vel.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit excepturi delectus facilis culpa impedit ad, voluptatem fuga odit ab autem reiciendis nisi nostrum, facere consectetur est eos, beatae perferendis unde.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias quos nemo nam, assumenda totam veniam laborum rem velit! Atque reiciendis quasi esse enim vitae minima et hic eaque a cumque!</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias cum voluptatem, a nulla ut dolore atque mollitia. Sit laudantium, est, illo consequuntur, cumque quaerat odit debitis tenetur ea beatae quasi!</p>
      </div>
      <div className='nocopy'>
        <img
          src="/shadu.png"
          alt="Image exemple"
          width={400}
          // height={300}
          onContextMenu={preventContextMenu}
        />
      </div>
    </div>
  );
}