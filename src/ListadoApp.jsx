import { AgregarTarea } from "./components/AgregarTarea"
import { useState } from "react"

const Items = ({nombre, visto}) => {
    return(
        <li>
            {nombre}
            {visto? '✅': '❌'}
            {/* {visto && '✅'} En el caso de NO necesitar la opcion false*/} 
        </li>
    )
}

export const ListadoApp = () => {

    /* const addTask = () => {
        setarreglo([...arreglo, {nombre: 'nuevo', visto: false}])
    } */

    let Listado = [
        { nombre : "Instalaciones necesarias", visto: true},
        { nombre : "Uso de Vite", visto : true},
        { nombre : "Componentes", visto : true},
        { nombre : "Variables en JSX", visto : true},
        { nombre : "Props", visto : true},
        { nombre : "Eventos", visto : true},
        { nombre : "useState", visto : true},
        { nombre : "Redux", visto : false},
        { nombre : "customHooks", visto : false},
    ]

const [arreglo, setarreglo] = useState(Listado)

    return(
        <>
            <h1>Listado</h1>
            <AgregarTarea agregarTarea={setarreglo}></AgregarTarea>

            <ol>
                {arreglo.map(item => <Items key={item.nombre} nombre={item.nombre} visto={item.visto}></Items>)}
            </ol>        
        </>
    )

}