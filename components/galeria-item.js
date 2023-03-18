import { maximizeImage } from "../helpers/maximize-image";

export default function GaleriaItem({imgUrl}) {
    return (
        <div className="w-[280px] shadow-lg border-2 border-solid border-[#e3e3e3] rounded">
            <img className="rounded h-[184px] object-cover lg:hover:cursor-zoom-in" id={imgUrl}
                onClick={() => maximizeImage(`/galeria/${imgUrl}.jpg`)}
                src={`/galeria/${imgUrl}.jpg`}
                alt="project" loading="lazy"
            />
        </div>
    );
}