//Debemos importat components from react
import {Component} from 'react';

class HijoDeporte extends Component {


    

    seleccionarFavorito = () => {
       //Llamamos al metodo del padre
        //Capturamos el deporte
        var deporte = this.props.nombre;

        //LLamamos al parent mediante props
        //Con el nombre del metodo que nos han pasado
        this.props.mostrarFavorito(deporte);
    }

    
    render(){
        return (
            <div>
                <h1 style={{color:"fuchsia"}}>{this.props.nombre}</h1>
                
                <button onClick={this.seleccionarFavorito}>
                    Seleccionar favorito
                </button>
            </div>
        )
    }

}

export default HijoDeporte;

