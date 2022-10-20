// //Debemos importat components from react
// import {Component} from 'react';
// import HijoNumero from './HijoNumero';

// class PadreNumeros extends Component {
    
//     //Creamos un array de numeros en state para despues dibujarlo
//     state = {
//         numerosArray: [],
//         suma:""
//     }
//     añadirHijo  = () => {
//        this.state.numerosArray.push(Math.floor(Math.random()*100));

//         this.setState({numerosArray:this.state.numerosArray})
        
//     }
    
//     suma  = (valor) => {
//         this.setState({suma:this.state.suma + valor})
//     }   

//     render(){
//         return(
//             <div>
//                 <h1>Numeros padre</h1>
//                 <h2 style = {{color:"fuchsia"}}>La suma es:</h2>
//                 <button onClick={this.añadirHijo}></button>

//                 {
//                     this.state.numerosArray.map((entero, index)=>{
//                         return(
//                             <HijoNumero numero={entero} key={index} suma={this.suma}></HijoNumero>
//                         )
//                     })

                    
//                 }
//             </div>
//         )
//     }
// }
// export default PadreNumeros;

import { Component } from 'react';
import HijoNumero from './HijoNumero';
class PadreNumeros extends Component {
    //CREAMOS UN ARRAY CON VALORES ALEATORIOS
    //Y UN VALOR SUMA CON VALOR 0 Y LO DIBUJAREMOS 
    //EN LA PAGINA
    state = {
        miarray: Array.from({length: 2}, () => Math.floor(Math.random() * 100)),
        suma: 0
    }
    mostrarSuma = (numeroSuma) => {
        this.setState({
            suma: this.state.suma + numeroSuma
        })
    }
    nuevoNumero = () => {
        //AÑADIMOS UN NUEVO NUMERO
        this.state.miarray.push(Math.floor(Math.random() * 100));
        //ACTUALIZAMOS EL ARRAY DE STATE
        this.setState({
            miarray: this.state.miarray
        })
    }
    render() {
        return(<div>
            <h1>Numeros Padre</h1>
            <h1 style={{color:"red"}}>La suma es... {this.state.suma}</h1>
            <button onClick={this.nuevoNumero}>Nuevo Numero</button>
            {
                this.state.miarray.map((numero, index) => {
                    return(<HijoNumero numeroSuma={numero} key={index} mostrarSuma={this.mostrarSuma}/>);
                })
            }
        </div>);
    }
}
export default PadreNumeros;