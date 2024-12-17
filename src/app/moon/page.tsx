import { Metadata } from 'next';
import Moon from './moon';

export const metadata: Metadata = {
    title: 'Moon',
    openGraph: {
        title: 'Exploring the Moon',
    },
};

const Space = () => {
    return <Moon />
};

export default Space;