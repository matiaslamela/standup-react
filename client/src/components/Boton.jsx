import React, { Component } from 'react'
//el GridSystem de bootstrap
//van a ser 12 a menos que le indiquemos lo contrario.
//la idea es dividir la aplicacion en columnas para los distintos tamaños de dispositivos.

//  |1|2|3|4|5|6|7|8|9|10|11|12|
//  |     |     | |            |
// si es un celular ocupa 12, sino ocupa 3
//row  ----> col

/*boton maneja su propio estado interno,  el cual cambia con un formulario,
 y utiliza la prop search que le envio tarjetas!
 entonces, es this.props.search(el valor que le querés enviar)
 en este caso, quisimos manejar el estado interno para enviar ese valor
 entonces queda this.props.search(this.state.busqueda)
 y el estado interno lo volvemos a manejar con this.setState como hicimos en Tarjetas*/
export default class Boton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      busqueda: '',
    }
  }
  render() {
    return (
      <div className="navbar bg-dark">
        <div style={{ color: 'white' }}>Salude a su amigo</div>
        <form
          onSubmit={e => {
            e.preventDefault()
            this.props.search(this.state.busqueda)
          }}
        >
          <input
            type="text"
            placeholder="agrega a tu amigo :D"
            value={this.state.busqueda}
            onChange={e => this.setState({ busqueda: e.target.value })}
          />
        </form>
      </div>
    )
  }
}

// export default function Boton(props){
//     var [busqueda, setBusqueda] = useState("")
//     return(
//         <div className = 'navbar bg-dark'>
//             <div style = {{color: 'white'}}>
//                 Salude a su amigo
//             </div>
//             <form onSubmit={(e) => {
//             e.preventDefault()
//             props.search(busqueda)
//             }}>
//                 <input
//                     type="text"
//                     placeholder="agrega a tu amigo :D"
//                     value={busqueda}
//                     onChange={e => setBusqueda(e.target.value)}
//                 />
//             </form>
//         </div>
//     )
// }
