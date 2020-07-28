import React from 'react'
import Tarjeta from './Tarjeta'
var array = ["mati", "gise", "ale"]

export default function Tarjetas(){
    return(
        <div>
            {array.map(elemento => {
                return <Tarjeta nombre = {elemento}/>
            })}
            
        </div>
    )
}
