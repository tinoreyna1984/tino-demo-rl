import CardServicio from "../components/card-servicio";

export default function Servicios() {
    return (
        <section id='servicios' className='flex flex-col items-center xl:gap-6 px-8 py-9 lg:px-40 lg:py-24
            bg-[#FAFAFA] shadow-lg shadow-black'>
            <h2 className="text-4xl text-center drop-shadow-md">Servicios</h2>
            <div className='mt-4 md:mt-10 flex flex-col items-center gap-4
                md:grid md:grid-cols-2 md:grid-rows-3 md:gap-6 lg:grid-cols-3 lg:grid-rows-2'>
                <CardServicio
                    srcImg={'serv-01'}
                    title={"Equipos contra incendios"}
                    desc={"Realizamos ventas, recargas y mantenimiento de equipos contra incendios."}
                    hRef={'/en-construccion'}
                />
                <CardServicio
                    srcImg={'serv-02'}
                    title={"Señalética"}
                    desc={"Confeccionamos señalética de seguridad industrial horizontal y vertical."}
                    hRef={'/en-construccion'}
                />
                <CardServicio
                    srcImg={'serv-03'}
                    title={"Alarmas contra incendios"}
                    desc={"Ofrecemos servicio de instalación estratégica de alarmas para la prevención de incendios."}
                    hRef={'/en-construccion'}
                />
                <CardServicio
                    srcImg={'serv-04'}
                    title={"Redes hidráulicas"}
                    desc={"Brindamos servicios de montaje en redes hidráulicas contra incendios."}
                    hRef={'/en-construccion'}
                />
                <CardServicio
                    srcImg={'serv-05'}
                    title={"Asesorías en seguridad industrial"}
                    desc={"Brindamos asesoría acerca de la normativa que usted debe conocer para la implementación de su negocio."}
                    hRef={'/en-construccion'}
                />
                <CardServicio
                    srcImg={'serv-06'}
                    title={"Charlas teórico-prácticas"}
                    desc={"Ofrecemos capacitaciones teórico-prácticas el área de seguridad industrial y riesgo laboral a personal de empresas."}
                    hRef={'/en-construccion'}
                />
            </div>
        </section>
    );
}