import React from 'react'
import './App.css'
import Tarjetas from './components/Tarjetas'

/*Habia quedado parte de la explicacion de bootstrap en algunos archivos, la dejo por las dudas
Les dejo un ejemplo de un componente en clases y abajo comentado como seria el mismo componente
hecho funcional. Para seguir la linea del archivo:
Tarjetas renderiza a tarjeta y a boton
Por lo que Tarjetas es el componente padre y boton y tarjeta los hijos.
Vamos a Tarjetas primero
*/

function App() {
  return (
    <div className="container">
      <Tarjetas />
    </div>
  )
}

export default App
