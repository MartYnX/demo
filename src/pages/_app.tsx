// import KonamiCode from '@/libs/konami';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            {/* <KonamiCode /> */}
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
