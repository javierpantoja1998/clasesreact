//Debemos importat components from react
import {Component} from 'react';
import HijoNumero from './HijoNumero';

class PadreNumeros extends Component {
    
    //Creamos un array de numeros en state para despues dibujarlo
    state = {
        numerosArray: [],
        suma:""
    }
    añadirHijo  = () => {
       this.state.numerosArray.push(Math.floor(Math.random()*100));

        this.setState({numerosArray:this.state.numerosArray})
        
    }
    
    suma  = (valor) => {
        this.setState({suma:this.state.suma + valor})
    }   

    render(){
        return(
            <div>
                <h1>Numeros padre</h1>
                <h2 style = {{color:"fuchsia"}}>La suma es:</h2>
                <button onClick={this.añadirHijo}></button>

                {
                    this.state.numerosArray.map((entero, index)=>{
                        return(
                            <HijoNumero numero={entero} key={index} suma={this.suma}></HijoNumero>
                        )
                    })

                    
                }
            </div>
        )
    }
}
export default PadreNumeros;