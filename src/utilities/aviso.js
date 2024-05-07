import Swal from 'sweetalert2';

export const aviso_alerta =  async (tipo) => {


    if (tipo ) {
        Swal.fire({
            title: "Encendido",
            text: "El bot se ha encendido correctamente",
            icon: "success"

        })
    }
    else 
        {
            Swal.fire({
                title: "Apagado",
                text: "El bot se ha apagado correctamente",
                icon: "success"
        
            })
        }
     


    return
};
