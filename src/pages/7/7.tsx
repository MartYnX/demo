'use client'

import './7.css';
import react, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Seven: React.FC = () => {

    const [windowWidth, setWindowWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 0);
    const [windowHeight, setWindowHeight] = useState<number>(typeof window !== 'undefined' ? window.innerHeight : 0);
    const router = useRouter();

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            setWindowHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        if (windowWidth === 777 && windowHeight === 777) {
            window.open("https://sillurgy.wixsite.com/portfolio-moinet-ale");
            router.push('/');
        }

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [windowWidth, windowHeight, router]);  // Include windowHeight in the dependency array

    return (
        null
    );
};

export default Seven;
