import { Metadata } from 'next';
import Glitch from './glitch';

export const metadata: Metadata = {
    title: 'Glitch'
};

export default function Layout() {
    return <Glitch />;
};
