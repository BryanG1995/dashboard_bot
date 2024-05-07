import React, { useContext, useEffect, useState } from 'react'
import { ActivateContext } from '../context/ActivateContext';
import Swal from 'sweetalert2';
import {aviso_alerta} from '../utilities/aviso'

export const ButtonActivate = () => {
    const { checkConnection, logged, activateBot, deactivateBot, serverOn } = useContext(ActivateContext);

    useEffect(() => {
        checkConnection();
        
    }, [])


    const onClick = () => {
        console.log('estado esta en: ', logged);


        Swal.fire({
            title: "¿Estas seguro?",
            // text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, seguro"
        }).then((result) => {
            if (result.isConfirmed) {
                if (!logged) {
                    activateBot();
                    
                    console.log("el test es " );

                    // aviso_alerta(logged);

                    return;
                }
                
                deactivateBot();
                // aviso_alerta(logged);
                return
            }
        });


        // if (!logged) {
        //     activateBot();
        //     return;
        // }
        // deactivateBot();
        // return;

    }
    return (
        <button
            onClick={onClick}
            disabled={!serverOn}
            // style={{ backgroundColor: logged ? 'blue' : 'red' }}
            className={!serverOn ? 'btn btn-lg btn-secondary' : !logged ? 'btn btn-lg btn-primary' : 'btn btn-lg btn-danger'}
        >
            {!logged ? "Encender" : "Apagar"}
        </button>
    )
}
