 // EJERCICIO 1: CONTADOR SIMPLE.
 import React from "react";


 class Contador extends React.Component{
   constructor(props){
     super(props);
      this.state ={contador: 0};
   }
   incrementar = ()=>{
     this.setState({contador: this.state.contador +1});
   };
   render(){
     return(
       <div>
       <p>{this.state.contador}</p>
       <button onClick={this.incrementar}>Incrementar</button>
       </div>
     );
   }
 }
  export default Contador;







//EJERCICIO 2: CICLO DE VIDA DE UN COMPONENTE
// import React from "react";
// import CicloDeVidaComponente from "./CicloDeVidaComponente";

// class App extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state = {mostrarComponente: true};
//   }
//   toggleComponente = () => {
//     this.setState((prevState) => ({
//       mostrarComponente: !prevState.mostrarComponente,
//     }));
//   }
//   render() {
//     return(
//       <div>
//       <button onClick ={this.toggleComponente}>
//       {this.state.mostrarComponente
//         ? "Ocultar Mensaje"
//         : "Mostrar Mensaje"}
//       </button>
//       {this.state.mostrarComponente && <CicloDeVidaComponente/>}
//       </div>
//     );
//   }
// }
// export default App;






// // //EJERCICIO 3: OPCIONAL
// import React from 'react';
// import CambiarNombre from './CambiarNombre'; 

// function App() {
//   return (
//     <div className="App">
//       <h1>Componente de CambiarNombre</h1>
//       <CambiarNombre /> {CambiarNombre}
//     </div>
//   );
// }

// export default App;
