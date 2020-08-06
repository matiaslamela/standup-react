import React, { Component } from 'react'

// export default function Tarjeta(props){
//     return(
//         <div
//         className = 'card col-4 p-1'
//         >hola {props.nombre}</div>
//     )
// }

//grilla de 12, 12/2 ---> 1/6

/*el componente tarjeta solo recibe la prop que le pasa Tarjetas, entonces para acceder a las props solo necesitamos
llamarlas como this.props 
Ahora ¿cuando es necesario definir un constructor? ¿Por qué en este caso no y en el de Tarjetas sí?
Cuando vos necesitas usar las props en el constructor. Cuando bindeamos el metodo agregarAmigos a ese componente
necesitabamos usar super(props) porque sino no lo iba a reconocer
*/
export default class Tarjeta extends Component {
  render() {
    return <div className="card col-4 p-1">hola {this.props.nombre}</div>
  }
}
