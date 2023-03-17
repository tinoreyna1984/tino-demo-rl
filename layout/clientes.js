import Cliente from "@/components/cliente";

export default function Clientes() {
    return (
        <section id='clientes' className="flex flex-col items-center xl:gap-6 px-8 py-9 lg:px-40 lg:py-24 bg-white">
            <div className="flex flex-col">
                <h2 className="text-4xl text-center drop-shadow-md">Clientes</h2>
                <p className='mt-6 text-lg text-center md:text-xl'>Nuestros clientes son nuestra carta de presentación:</p>
            </div>
            <div className="flex flex-col items-center gap-4
                md:grid md:grid-cols-2 md:grid-rows-3 md:gap-6 lg:grid-cols-3 lg:grid-rows-2 lg:gap-10"
            >
                <Cliente srcImg={'cliente-01'} url="https://www.cgsa.com.ec/" />
                <Cliente srcImg={'cliente-02'} url="https://www.pronaca.com/" />
                <Cliente srcImg={'cliente-03'} url="https://www.bancoguayaquil.com/" />
                <Cliente srcImg={'cliente-04'} url="https://www.chaide.com/" />
                <Cliente srcImg={'cliente-05'} url="https://www.grupobimbo.com/" />
                <Cliente srcImg={'cliente-06'} url="https://hogardecristo.org.ec/" />
                <Cliente srcImg={'cliente-07'} url="https://www.valango.com/consorcio-puerto-limpio/" />
                <Cliente srcImg={'cliente-08'} url="https://www.durexporta.com/" />
                <Cliente srcImg={'cliente-09'} url="http://www.ipac-acero.com/" />
                <Cliente srcImg={'cliente-10'} url="https://www.superbancos.gob.ec/" />
                <Cliente srcImg={'cliente-11'} url="https://www.tctelevision.com/" />
            </div>
        </section>
    );
}