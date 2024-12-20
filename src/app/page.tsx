'use client'

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';


export default function Home() {

  const preventContextMenu = (e: React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault(); // Empêche l'ouverture du menu contextuel (clic droit)
  };

  return (
    <div>
      <h1>Bienvenue sur la page d&apos;accueil</h1>
      <Link href="/moon">
        <button>Moon</button>
      </Link>
      <Link href="/gol">
        <button>game of life</button>
      </Link>

      <Link href="/glitch">
        <button>text</button>
      </Link>
      <Link href="/cv">
        <button>resume</button>
      </Link>
      <Link href="/markdown">
        <button>markdown</button>
      </Link>
      <div className='nocopy'>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A quaerat omnis atque. Id repellat molestiae sequi autem tempora consectetur voluptatibus pariatur, maxime, aliquid laborum debitis cupiditate eos ipsum dignissimos vel.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit excepturi delectus facilis culpa impedit ad, voluptatem fuga odit ab autem reiciendis nisi nostrum, facere consectetur est eos, beatae perferendis unde.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias quos nemo nam, assumenda totam veniam laborum rem velit! Atque reiciendis quasi esse enim vitae minima et hic eaque a cumque!</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias cum voluptatem, a nulla ut dolore atque mollitia. Sit laudantium, est, illo consequuntur, cumque quaerat odit debitis tenetur ea beatae quasi!</p>
      </div>
      <div className='nocopy'>
        <Image
          src="/images/gangle.png"
          alt="Image exemple"
          width={1000} // give the resolution of pic, not the size
          height={1000} // same (try to put 0 on both to understand)
          style={{
            width: '300px',
            height: 'auto',
          }}
          onContextMenu={preventContextMenu}
          priority
        />
      </div>
    </div>
  );
}