import { Metadata } from 'next';
import Resume from './resume';

export const metadata: Metadata = {
    metadataBase: new URL("https://demo-kohl-ten.vercel.app/"),
    title: 'Resume',
    openGraph: {
        title: 'Resume',
    },
    twitter: {
        title: 'Resume'
    }
};

const Space = () => {
    return <Resume />
};

export default Space;