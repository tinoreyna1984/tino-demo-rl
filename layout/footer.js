import Link from "next/link";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <footer className="flex flex-col bg-[#FAFAFA] px-8 py-9 gap-6
            lg:grid lg:grid-cols-3 lg:gap-10 lg:grid-rows-[auto_minmax(fit-content,_1fr)] lg:items-start
            lg:px-40 lg:py-16"
        >
            <div className="flex flex-col items-start">
                <h3 className="text-lg">Dirección</h3>
                <p className="text-sm mt-2">Guayacanes Mz 237 Solar 1, Guayaquil, Ecuador.</p>
            </div>
            <div className="flex flex-col items-start">
                <h3 className="text-lg">Nuestra empresa</h3>
                <ul className="flex flex-col items-start mt-2 gap-2">
                    <Link className="text-sm" href={'/'}>Inicio</Link>
                    <Link className="text-sm" href={'#nosotros'}>Nosotros</Link>
                    <Link className="text-sm" href={'#servicios'}>Servicios</Link>
                    <Link className="text-sm" href={'#clientes'}>Clientes</Link>
                    <Link className="text-sm" href={'#'}>Galería</Link>
                    <Link className="text-sm" href={'#'}>Contacto</Link>
                </ul>
            </div>
            <div className="flex flex-col items-start">
                <h3 className="text-lg">Fono/Correo/Redes</h3>
                <ul className="flex flex-col items-start mt-2 gap-4">
                    <li className="text-sm">Teléfonos: (+593) 42828769/(+593) 42821184</li>
                    <li className="text-sm">Ventas: (+593) 999795275</li>
                    <li className="text-sm">WhatsApp:(+593) 987324925</li>
                    <li className="text-sm">Correo: ventas-corp@richardlorentzen.com, ventas@richardlorentzen.com</li>
                    <li className="flex flex-row gap-6">
                        <a href="https://www.facebook.com/RichardLorentzenEc/" target={'_blank'}>
                            <FontAwesomeIcon icon={faFacebookF} size="2x" />
                        </a>
                        <a href="https://www.instagram.com/richardlorentzenec/" target={'_blank'}>
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col items-start">
                <p className="text-sm">
                    Derechos reservados, Richard Lorentzen - Servicios y equipos contra incendios &copy;{new Date().getFullYear()}
                </p>
                <p className="text-sm">
                    Desarrollado por <a href="https://tinexlab.vercel.app/" className="font-bold" target={'_blank'}>TinexLab</a>
                </p>
            </div>
        </footer>
    );
}