
const baseUrl = 'http://localhost:8080/api';

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
    }

}