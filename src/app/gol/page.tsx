import { Metadata } from 'next';
import GameOfLife from './gol';

export const metadata: Metadata = {
    metadataBase: new URL("https://demo-kohl-ten.vercel.app/"),
    title: 'GameOfLife',
    openGraph: {
        title: 'GameOfLife',
    },
    twitter: {
        title: 'GameOfLife'
    }
};

export default function Layout() {
    return (
        <div>
            <h1>Je de la vie</h1>
            <GameOfLife />
        </div>
    );
};
