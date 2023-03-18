import Link from "next/link";

export default function CardServicio({ srcImg, title, desc, hRef }) {
    return (
        <div className="max-w-[300px] flex flex-col items-center
            lg:transition-transform lg:duration-500 lg:hover:-translate-y-3">
            <picture>
                <source className="rounded shadow-lg" srcSet={`/servicios/avif/${srcImg}.avif`} type="image/avif" />
                <source className="rounded shadow-lg" srcSet={`/servicios/webp/${srcImg}.webp`} type="image/webp" />
                <img className="rounded shadow-lg" height={220} width={330} src={`/servicios/minified/${srcImg}.jpg`} alt={`${srcImg}`} />
            </picture>
            <div className="p-8 -mt-16 h-[200px] max-w-[240px] flex flex-col justify-center items-center text-center
                bg-white rounded shadow-lg gap-3"
            >
                <h3 className="text-lg">{title}</h3>
                <p className="text-xs">{desc}</p>
                <Link className="text-xs text-[#D52047] lg:hover:transition
                    lg:hover:duration-300 lg:hover:ease-in-out lg:hover:text-[#EE3D1B]"
                    href={hRef}
                >
                    Leer más
                </Link>
            </div>
        </div>
    );
}