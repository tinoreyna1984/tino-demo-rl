import Carousel from "../components/carousel";

export default function QuienesSomos() {
    return (
        <section id='quienes-somos' className="flex flex-col xl:flex-row xl:items-center xl:gap-16 px-8 py-9 lg:px-40 lg:py-24">
            <div className="flex flex-col max-w-[620px]">
                <h2 className="text-4xl drop-shadow-md">Quiénes somos</h2>
                <div className="flex flex-col gap-6 mt-6">
                    <p>Somos una empresa con 30 años de experiencia brindando asesoría y servicios en el área de seguridad industrial, prevención contra incendios, accidentes laborales, edificaciones y estructuras, así como también la confección de señaléticas para cada una de las áreas antes mencionadas.</p>
                    <div>
                        <h3 className="text-2xl">Misión</h3>
                        <p className="mt-3">Brindar asesoramiento y solución integral a los requerimientos que se presenten para así minimizar los riesgos y garantizar la seguridad industrial.</p>
                    </div>
                    <div>
                        <h3 className="text-2xl">Visión</h3>
                        <p className="mt-3">Ser la empresa líder a nivel nacional en el servicio de seguridad industrial y prevención contra incendios.</p>
                    </div>
                </div>
            </div>
            <Carousel />
        </section>
    );
}