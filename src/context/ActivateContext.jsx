import { createContext, useState } from 'react';
import { connectionApi } from '../api/connectionApi';


export const ActivateContext = createContext();

const initialState = {
    logged: false,
}

export const ActivateProvider = ({ children }) => {

    const [state, setState] = useState(initialState)

    const checkConnection = async () => {
        try {
            const resp = await connectionApi('activate/status');
            console.log(resp);
            setState({ ...state, logged: resp.estado })
            return true;

        } catch (error) {
            console.log(error);
        }
    }

    const activateBot = async () => {
        try {
            const resp = await connectionApi('activate');
            console.log(resp);
            setState({ ...state, logged: resp.ok })
            return true;

        } catch (error) {
            console.log(error);
        }
    }

    const deactivateBot = async () => {
        try {
            const resp = await connectionApi('deactivate');
            console.log(resp);
            setState({ ...state, logged: resp.ok })
            return false;
        } catch (error) {
            console.log(error);
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
