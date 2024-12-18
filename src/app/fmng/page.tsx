import { Metadata } from 'next';
import FursuitMakerNameGenerator from './fmng';

export const metadata: Metadata = {
    metadataBase: new URL("https://demo-kohl-ten.vercel.app/"),
    title: 'FursuitMakerNameGenerator',
    openGraph: {
        title: 'FursuitMakerNameGenerator',
    },
    twitter: {
        title: 'FursuitMakerNameGenerator'
    }
};

export default function Layout() {
    return (
        <div>
            <FursuitMakerNameGenerator />
        </div>
    );
};
