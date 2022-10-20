// //Debemos importat components from react
// import {Component} from 'react';

// class HijoNumero extends Component {

//     render(){
//         return (
//             <div>
//                 <h1 style={{color:"fuchsia"}}>Soy hijo</h1>

//                 <button onClick={this.suma}>
//                     Sumar (this.props.numero)
//                 </button>
                
                
//             </div>
//         )
//     }
// }
// export default HijoNumero;

import { Component } from 'react';
class HijoNumero extends Component {
    sumarNumero = () => {
        var numero = this.props.numeroSuma;
        this.props.mostrarSuma(numero);
    }
    render() {
        return(<div>
            <h1 style={{color:"blue"}}>Numero hijo: {this.props.numeroSuma}</h1>
            <button onClick={this.sumarNumero}>Sumar {this.props.numeroSuma}</button>
        </div>);
    }
}
export default HijoNumero;