export default function Cliente({ srcImg, url }) {
    return (
        <div className="max-h-[300px] max-w-[240px]
            lg:transition-transform lg:duration-500 lg:ease-in-out lg:hover:scale-[1.2]"
        >
            <a href={url} target="_blank">
                <picture>
                    <source className="p-6" srcSet={`/clientes/avif/${srcImg}.avif`} type="image/avif" />
                    <source className="p-6" srcSet={`/clientes/webp/${srcImg}.webp`} type="image/webp" />
                    <img className="p-6" src={`/clientes/minified/${srcImg}.jpg`} alt={`${srcImg}`} />
                </picture>
            </a>
        </div>
    );
}