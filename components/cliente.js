export default function Cliente({ srcImg, url }) {
    return (
        <div className="max-h-[300px] max-w-[240px]">
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