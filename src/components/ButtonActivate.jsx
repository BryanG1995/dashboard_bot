import React, { useContext, useEffect, useState } from 'react'
import { ActivateContext } from '../context/ActivateContext';

export const ButtonActivate = () => {
    const { checkConnection, logged, activateBot, deactivateBot } = useContext(ActivateContext);

    useEffect(() => {
        checkConnection();
    }, [])


    const onClick = () => {
        console.log('estado esta en: ', logged);
        if (!logged) {
            activateBot();
            return;
        }
        deactivateBot();
        return;

    }
    return (
        <button
            onClick={onClick}
            style={{ backgroundColor: logged ? 'blue' : 'red' }}
        >
            {logged ? "si soy" : "no soy"}
        </button>
    )
}
