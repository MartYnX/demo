import { AppProps } from 'next/app';
import KonamiCode from '@/libs/konami';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Component {...pageProps} />
            <KonamiCode />
        </>
    );
}

export default MyApp;
