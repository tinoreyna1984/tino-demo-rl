export const maximizeImage = (imageUrl) => {
    const amplifiedImg = document.createElement('picture');
    amplifiedImg.innerHTML = `<img src="${imageUrl}" class="fade-in-gallery-item" alt="gallery-item" loading="lazy" />`;

    // overlay
    const overlay = document.createElement("div");
    overlay.appendChild(amplifiedImg);
    overlay.classList.add('overlay');
    overlay.onclick = () => { // evento para cerrar el modal
        const body = document.querySelector("body");
        body.classList.remove('fixed-body');
        overlay.remove()
    };

    // botón para cerrar modal de la imagen
    const cerrarModal = document.createElement('p');
    cerrarModal.textContent = "X";
    cerrarModal.classList.add("close-button");
    overlay.appendChild(cerrarModal);
    cerrarModal.onclick = () => { // evento para cerrar el modal
        const body = document.querySelector("body");
        body.classList.remove('fixed-body');
        overlay.remove()
    };

    // imagen dentro del overlay creado en el cuerpo
    const body = document.querySelector("body");
    body.appendChild(overlay);
    body.classList.add('fixed-body');
}