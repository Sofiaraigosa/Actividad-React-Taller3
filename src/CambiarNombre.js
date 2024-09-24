import React, { Component } from 'react';

class CambiarNombre extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: 'Ana',
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.nombre !== this.state.nombre) {
      console.log('El nombre ha sido actualizado:', this.state.nombre);
    }
  }

  cambiarNombre = () => {
    const nuevoNombre = this.state.nombre === 'Ana' ? 'Sofia' : 'Ana';
    this.setState({ nombre: nuevoNombre });
  };

  render() {
    return (
      <div>
        <h3>Nombre actual: {this.state.nombre}</h3>
        <button onClick={this.cambiarNombre}>Cambiar Nombre</button>
      </div>
    );
  }
}

export default CambiarNombre;
