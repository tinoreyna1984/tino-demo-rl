export default function Mapa() {
    return (
        <div className="flex flex-col gap-4">
            <h3 className="text-left">Visítanos</h3>
            <div className="rounded-lg shadow-lg">
                <iframe className="rounded-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.093986437921!2d-79.88585258540951!3d-2.1174635984564767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d6d2e722ab28d%3A0x733b16b5c7d32541!2sRychard%20Lorentzen%20Servicios%20y%20Equipos%20contra%20Incendio!5e0!3m2!1ses!2sec!4v1679099811928!5m2!1ses!2sec"
                    width="244" height="366.4" style={{ border: "0" }} allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    );
}