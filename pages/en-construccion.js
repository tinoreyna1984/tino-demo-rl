import Head from "next/head";
import Image from "next/image";

export default function EnConstruccion() {
    return (
        <>
            <Head>
                <title>Página en construcción</title>
                <meta name="description" content="Página en construcción" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='flex flex-col items-center gap-4 xl:gap-6 px-8 py-9 lg:px-40 lg:py-24
            bg-white shadow-lg shadow-black'
            >
                <h1 className="text-center md:text-5xl xl:text-7xl drop-shadow-md">Página en construcción...</h1>
                <img width={450} height={225} src={`/en-construccion.png`} alt={`en-construccion`} />
            </div>
        </>
    );
}