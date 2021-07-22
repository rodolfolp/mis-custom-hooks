import { useEffect, useState } from 'react'

export const useFetch = (url) => {
    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect(() => {

        setState({ data: null, loading: true, error: null });//Establecer el LOAING en true para hacerlo visible mientras carga

        fetch(url)
            .then(resp => resp.json())
            .then(
                data =>
                    setState({
                        loading: false,
                        error: null,
                        data// listo para pasar la data ya almacenada
                    })

            )

    }, [url])//Ejecutar cuando haya url UNICAMENTE

    return state;

}
