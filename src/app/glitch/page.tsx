import { Metadata } from 'next';
import Glitch from './glitch';

export const metadata: Metadata = {
    metadataBase: new URL("https://demo-kohl-ten.vercel.app/glich"),
    title: 'Glich',
    openGraph: {
        title: 'Glich',
    },
    twitter: {
        title: 'Glitch'
    }
};

export default function Layout() {
    return <Glitch />;
};
