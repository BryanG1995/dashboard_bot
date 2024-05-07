import React, { useContext, useEffect, useState } from 'react'
import { ActivateContext } from '../context/ActivateContext';
import Swal from 'sweetalert2';

export const ButtonActivate = () => {
    const { checkConnection, logged, activateBot, deactivateBot } = useContext(ActivateContext);

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
                    Swal.fire({
                        title: "Encendido",
                        text: "EL bot se ha encendido correctamente",
                        icon: "success"

                    });
                    return;
                }
                deactivateBot();

                Swal.fire({
                    title: "Apagado",
                    text: "EL bot se ha apagado correctamente",
                    icon: "success"

                });
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
            // style={{ backgroundColor: logged ? 'blue' : 'red' }}
            className={!logged ? 'btn btn-lg btn-primary' : 'btn btn-lg btn-danger'}
        >
            {!logged ? "Encender" : "Apagar"}
        </button>
    )
}
