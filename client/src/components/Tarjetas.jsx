import React, { Component } from 'react'
import Tarjeta from './Tarjeta'
import Boton from './Boton'

/*Un componente de clases esta divido en tres partes. El constructor, los metodos y el render*/
export default class Tarjetas extends Component {
  //primera parte: el constructor
  //definir las props y el estado
  //a diferencia de los funcionales, el estado de un componente de clases solo puede ser un objeto
  //por lo que si tenemos un arreglo, tenemos que definirlo de esta manera
  //en caso de tener metodos, es necesario bindear el this a esta clase, porque cuando queramos
  //invocarla, el this no va a ser el mismo que el de esta clase, porque recordemos
  //que el metodo lo vamos a pasar como prop a otro componente.
  constructor(props) {
    super(props)
    this.state = {
      amigos: [],
    }
    this.agregarAmigos = this.agregarAmigos.bind(this)
  }
  /*
    si quisieramos definir solo un objeto que tenga un string vacio hariamos
    this.state= {
        nombre : ""
    }
    y el estado inicial seria solamente la key nombre con el value ""
    */

  //definir los metodos de la clase
  //igual a javascript normal
  //tienen un metodo, tienen bindear el metodo en el constructor
  /*Nuestro metodo lo que va a hacer es agregar amigos al estado de Tarjetas
    Entonces, lo que hacemos es usar el metodo setState de react y le pasamos un estado nuevo
    para mantener lo que estaba en el estado anterior, usamos un spread operator.
    Este metodo se lo vamos a pasar al componente Boton, entonces Boton va a disparar el evento
    y va a cambiar el estado de Tarjetas, pero Boton nunca se entera de lo que paso.
    Solo le avisa a Tarjetas que se cambio.
    El estado de boton no se ve afectado por el estado de tarjetas.
    Al cambiar el estado de este componente, se vuelve a renderizar la cantidad de componentes Tarjeta
    */
  agregarAmigos(nuevaPersona) {
    this.setState({
      amigos: [...this.state.amigos, nuevaPersona],
    })
  }
  //tercer parte es el render.
  //la unica diferencia que tienen es que antes de cada elemento le agregan el this
  //this.props
  //para pasar el metodo usamos this.agregarAmigos
  //para utilizar el estado usamos  this.state.amigos y ya podemos acceder al estado
  render() {
    return (
      <div>
        <Boton search={this.agregarAmigos} />
        <div className="row">
          {this.state.amigos.map((elemento, index) => {
            return <Tarjeta nombre={elemento} key={index} />
          })}
        </div>
      </div>
    )
  }
}
//usar los this, definir el constructor, para definir el estado usas this.setState()
//el estado es siempre un objeto

//componente padre(tarjetas)
//componentes hijos(tarjeta y boton)
//one way dataflow. Padres pasan props, hijos pasan eventos
//boton pasa el evento al padre, y el padre setea las nuevas props para tarjeta

// export default function Tarjetas(){
//     var [persona, setPersonas] = useState([])

//     function agregarAmigos(nuevaPersona){
//         setPersonas([...persona, nuevaPersona])
//     }

//     return(
//         <div>
//             <Boton search= {agregarAmigos}/>
//             <div className = 'row'>
//                 {persona.map((elemento, index) => {
//                     return <Tarjeta nombre = {elemento} key = {index}/>
//                 })}

//             </div>
//         </div>
//     )
// }
