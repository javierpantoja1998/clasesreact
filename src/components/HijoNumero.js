//Debemos importat components from react
import {Component} from 'react';

class HijoNumero extends Component {

    render(){
        return (
            <div>
                <h1 style={{color:"fuchsia"}}>Soy hijo</h1>

                <button onClick={this.suma}>
                    Sumar
                </button>
                
                suma (this.props.numero)
            </div>
        )
    }
}
export default HijoNumero;