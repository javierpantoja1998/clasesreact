//Debemos importat components from react
import {Component} from 'react';

class Numeros extends Component {
    
    //Creamos un array de numeros en state para despues dibujarlo
    state = {
        numerosArray:[],
        suma:""
    }
    añadirHijo  = () => {
        this.setState({
            f
        })
          = this.state.numerosArray;
    }

    render(){
        return(
            <div>
                <h1>Numeros padre</h1>
                <h2 style = {{color:"fuchsia"}}>La suma es:</h2>
                <button onClick={this.añadirHijo}></button>
            </div>
        )
    }
}