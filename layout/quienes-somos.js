import Carousel from "../components/carousel";

export default function QuienesSomos() {
    return (
        <section id='quienes-somos' className="flex flex-col xl:flex-row xl:items-center xl:gap-16 px-8 py-9 lg:px-40 lg:py-24">
            <div className="flex flex-col max-w-[620px]">
                <h2 className="text-4xl drop-shadow-md">Quiénes somos</h2>
                <div className="flex flex-col gap-6 mt-6">
                    <p>Somos una empresa de servicios de seguridad industrial y prevención de incendios y otros desastres, comprometida con la satisfacción de nuestros clientes y, al mismo tiempo, el cumplimiento de los estándares que definen la excelencia en la prestación de dichos servicios.</p>
                    <div>
                        <h3 className="text-2xl">Misión</h3>
                        <p className="mt-3">Es brindar al cliente asesoramiento y solución integral a los requerimientos que se presenten y permitan minimizar los riesgos y garantizar la seguridad industrial.</p>
                    </div>
                    <div>
                        <h3 className="text-2xl">Visión</h3>
                        <p className="mt-3">Ser una de las empresas líderes a nivel nacional con sucursales prestando el servicio de asesoramiento y capacitación, así como la innovación de los equipos que brindamos a las empresas para la prevención de incendios.</p>
                    </div>
                    <div>
                        <h3 className="text-2xl">Breve reseña histórica</h3>
                        <p className="mt-3">Contamos con 30 años de experiencia que en el camino ha venido brindando su asesoría como parte de sus servicios en el área de seguridad industrial en el área de prevención contra incendios, accidentes laborales industriales, edificaciones y estructuras, así como las señaleticas  para cada una de las empresas.</p>
                    </div>

                </div>
            </div>
            <Carousel />
        </section>
    );
}