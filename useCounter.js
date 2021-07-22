import { useState } from "react"


// NO SE VA A UTILIZAR JFX
export const useCounter = (initialState = 10) => {
    const [counter, setCounter] = useState(initialState);//initialState es el Valor pasado desde el archivo que llama

    const increment = () => {
        setCounter(counter + 1);
    }
    const decrement = () => {
        setCounter(counter - 1);
    }
    const reset = () => {
        setCounter(initialState);//Resetear al valor original
    }

    return {
        counter,
        increment,
        decrement,
        reset,
    }
}

//RAFC - CREAR HOOK USECOUNTER
