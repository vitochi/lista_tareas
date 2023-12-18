import { useState } from "react"

export const AgregarTarea = ({agregarTarea}) => {

    const [inputValue, setInputValue] = useState('')
    
    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }
    const onSubmit = (event) => {
        const envio = {
            nombre : inputValue,
            visto : false
        }
        event.preventDefault()
        agregarTarea(tareas => [...tareas, envio])

    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Ingrese un Tema/Clase"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>

    )
}