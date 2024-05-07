import { createContext, useState } from 'react';
import { connectionApi } from '../api/connectionApi';
import {aviso_alerta} from '../utilities/aviso'

export const ActivateContext = createContext();

const initialState = {
    logged: false,
    serverOn: true,
}

export const ActivateProvider = ({ children }) => {

    const [state, setState] = useState(initialState)

    const checkConnection = async () => {
        try {
            const resp = await connectionApi('activate/status');
            console.log(resp);
            setState({ ...state, logged: resp.estado , serverOn: true})
            return true;

        } catch (error) {
            console.log(error);
            setState({ ...state, serverOn: false })
        }
    }

    const activateBot = async () => {
        try {
            const resp = await connectionApi('activate');
            console.log(resp);
            setState({ ...state, logged: resp.ok ,serverOn: true})
            aviso_alerta(true);
            return true;

        } catch (error) {
            console.log(error);
            setState({ ...state, serverOn: false })
        }
    }

    const deactivateBot = async () => {
        try {
            const resp = await connectionApi('deactivate');
            console.log(resp);
            setState({ ...state, logged: resp.ok ,serverOn: true})
            aviso_alerta(false);
            return false;
        } catch (error) {
            console.log(error);
            setState({ ...state, serverOn: false })
        }
    }

    return (
        <ActivateContext.Provider value={{
            ...state,
            checkConnection,
            activateBot,
            deactivateBot,
        }}>
            {children}
        </ActivateContext.Provider>
    )
}
