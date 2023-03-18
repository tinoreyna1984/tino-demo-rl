import Formulario from "../components/formulario";
import Mapa from "../components/mapa";

export default function Contacto() {
    return (
        <section id="contacto" className='flex flex-col items-center gap-6 px-8 py-9 lg:px-40 lg:py-24'>
            <h2 className="text-4xl text-center drop-shadow-md">Contacto</h2>
            <div className="flex flex-col items-center gap-4 md:gap-8 md:grid md:grid-cols-3 md:items-start lg:gap-16">
                <Formulario />
                <Mapa />
            </div>
        </section>
    );
}