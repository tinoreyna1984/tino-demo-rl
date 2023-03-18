import GaleriaItem from "../components/galeria-item";

export default function Galeria() {
    return (
        <section id="galeria" className='flex flex-col items-center
            xl:gap-6 px-8 py-9 lg:px-40 lg:py-24 bg-[#ED4C5C] text-white
            shadow-lg'
        >
            <div>
                <h2 className="text-4xl text-center drop-shadow-md">Galería</h2>
            </div>
            <div className="flex flex-col items-center mt-6 gap-8
                md:grid md:grid-cols-2 md:grid-rows-3 md:gap-6 lg:grid-cols-3 lg:grid-rows-2 lg:gap-10"
            >
                <GaleriaItem imgUrl={"gal-01"} />
                <GaleriaItem imgUrl={"gal-02"} />
                <GaleriaItem imgUrl={"gal-03"} />
                <GaleriaItem imgUrl={"gal-04"} />
                <GaleriaItem imgUrl={"gal-05"} />
                <GaleriaItem imgUrl={"gal-06"} />
            </div>
        </section>
    );
}