import { Metadata } from 'next';
import Moon from './moon';

export const metadata: Metadata = {
    metadataBase: new URL("https://demo-kohl-ten.vercel.app/moon"),
    title: 'Moon',
    openGraph: {
        title: 'Moon',
    },
    twitter: {
        title: 'Moon'
    }
};

const Space = () => {
    return <Moon />
};

export default Space;