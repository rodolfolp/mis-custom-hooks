import { useState } from "react"

//Almacena los valores introducidos en el formulario
export const useForm = (initialState = {}) => {
    const [valoresdelForm, setvaloresdelForm] = useState(initialState)

    //Borrar las casillas
    const reset = ()=>{
        setvaloresdelForm( initialState );
    }

    const handleInputChange = ({ target }) => {
        setvaloresdelForm({
            ...valoresdelForm,//TODOS LOS CAMPOS
            [target.name]: target.value //Almacenar - visualizar los datos escritos en las casillas - NOMBRE DEL CAMPO, VALOR DEL CAMPO
        })

    }
    return [valoresdelForm, handleInputChange, reset]//Retornar el objeto, y su definicion y valores

}
