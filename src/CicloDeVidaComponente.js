import React from 'react';

class CicloDeVidaComponente extends React.Component {
  constructor(props) {
    super(props);
    this.state = {mensaje: "Has click en el boton"};
  }

  cambiarMensaje = () => {
    this.setState({mensaje: "El mensaje se ha cambiado"});
  }

  componentDidUpdate() {
    console.log("El componente ha sido actualizado.");
  }

  componentWillUnmount() {
    console.log("El componente será desmontado.");
  }


  render() {
    return (
      <div>
        <p>{this.state.mensaje}</p>
        <button onClick = {this.cambiarMensaje}>Cambiar mensaje</button>
      </div>
    );
  }
}

export default CicloDeVidaComponente;