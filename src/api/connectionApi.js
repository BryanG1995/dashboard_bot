
const baseUrl  = import.meta.env.VITE_BASE_URL;

import Swal from 'sweetalert2';

export const connectionApi = async (endpoint, data, method = 'GET') => {

    const url = `${baseUrl}/${endpoint}`;
    try {
        if (method === 'GET') {
            const resp = await fetch(url);
            return await resp.json();
        } else {
            const resp = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            return await resp.json();
        }
    } catch (error) {

        const msg = 'No se pudo establecer la conexión con el servidor';
        console.warn(msg);
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No se pudo establecer la conexión con el servidor",
            // footer: '<a href="#">Why do I have this issue?</a>'
          });
          
    }

}