import { Metadata } from 'next';
import MarkdownEditor from './markdown';

export const metadata: Metadata = {
    metadataBase: new URL("https://demo-kohl-ten.vercel.app/"),
    title: 'MarkdownEditor',
    openGraph: {
        title: 'MarkdownEditor',
    },
    twitter: {
        title: 'MarkdownEditor'
    }
};

export default function Layout() {
    return (
        <div>
            <MarkdownEditor />
        </div>
    );
};
