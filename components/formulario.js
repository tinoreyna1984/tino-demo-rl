import { useForm } from "../hooks/useForm";
import Swal from "sweetalert2";

export default function Formulario() {

    const { name, email, phone, message, handleInputChange, reset } = useForm({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const validFields = (name, email, phone, message) => {
        let phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;
        let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (name.length < 2) {
            Swal.fire(
                "Contacto",
                "Nombre no válido",
                "error"
            );
            return false;
        }
        if (!emailRegex.test(email) || email.length === 0) {
            Swal.fire(
                "Contacto",
                "Correo no válido",
                "error"
            );
            return false;
        }
        if (!phoneRegex.test(phone) || phone.length === 0) {
            Swal.fire(
                "Contacto",
                "Teléfono no válido",
                "error"
            );
            return false;
        }
        if (!message.length) {
            Swal.fire(
                "Contacto",
                "El mensaje no puede estar vacío",
                "error"
            );
            return false;
        }
        return true;
    };

    const handleSubmit = async (name, email, phone, message) => {

        if (!validFields(name, email, phone, message))
            return;
        
        // Solo muestra el mensaje. Queda pendiente el TODO siguiente
        Swal.fire("Contacto", "Mensaje enviado exitosamente", "success");
        reset();

        // TODO: implementar servicio de correo
        /* try {
            const res = await fetch(`/api/sendgrid`, {
                body: JSON.stringify({
                    email: email,
                    name: name,
                    phone: phone,
                    message: message,
                }),
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Credentials": true,
                },
                method: "POST",
            });
            const { error } = await res.json();
            console.log(error);
            if (error) {
                console.log("ERROR: ", error);
                Swal.fire(
                    "Contacto",
                    `No se pudo enviar el mensaje: ${error}`,
                    "error"
                );
            } else Swal.fire("Contacto", "Mensaje enviado exitosamente", "success");
            reset();
        } catch (error) {
            console.log("ERROR: ", error);
            Swal.fire(
                "Contacto",
                `No se pudo enviar el mensaje: ${error.message}`,
                "error"
            );
        } */
    }


    return (
        <form className="md:col-span-2">
            <fieldset className="flex flex-col gap-4 w-[244px] md:w-auto">
                <legend className="text-lg">Escríbenos</legend>
                <div className="flex flex-col gap-4 mt-4">
                    <input className="border border-solid border-[#a8a8a8] rounded-lg py-3 px-2"
                        name="name" value={name} onChange={handleInputChange} autoComplete="off"
                        type={'text'} placeholder={'Tu nombre'} required
                    />
                    <input className="border border-solid border-[#a8a8a8] rounded-lg py-3 px-2"
                        name="email" value={email} onChange={handleInputChange} autoComplete="off"
                        type={'email'} placeholder={'Tu correo'} required
                    />
                    <input className="border border-solid border-[#a8a8a8] rounded-lg py-3 px-2"
                        name="phone" value={phone} onChange={handleInputChange} autoComplete="off"
                        type={'tel'} placeholder={'Tu teléfono'} required
                    />
                    <textarea className="border border-solid border-[#a8a8a8] rounded-lg py-3 px-2 resize-none"
                        name="message" value={message} onChange={handleInputChange} autoComplete="off"
                        rows={3} placeholder="Deja tu mensaje" required
                    />
                    <button type="button" className="p-4 rounded-lg bg-[#ED4C5C]
                        transition-colors hover:bg-[#D52047] hover:duration-300 hover:ease-in-out hover:delay-150
                        active:bg-[#D52047]
                      text-white uppercase"
                        onClick={() => handleSubmit(name, email, phone, message)}
                    >
                        Enviar
                    </button>
                </div>
            </fieldset>
        </form>
    );
}