//Debemos importat components from react
import {Component} from 'react';
import HijoDeporte from './HijoDeporte';

class PadreDeportes extends Component {

    //Creamos un array de deporte en state para despues dibujarlo
    state = {
        deportes:["Futbol","Basketball","Tenis","Padel","Rugby"],
        favorito : ""
    }

    //Vamos a crear un metodo que sera llamado desde el hijo
    //Donde mostraremos el favorito
    //El hijo nos tiene que mandar el valor
    mostrarFavorito = (deporteSeleccionado) => {
        //Segun recibibimos el valor del hijo usamos un state para mostrarlo en la pagina
        //Usamos  deporteSeleccionado como parametro
        this.setState({
            favorito: deporteSeleccionado
        })
    }

    render(){
        return (
            <div>
                <h1 style={{color:"blue"}}>Padre deporte</h1>
                <h3 style={{color:"green"}}> Deporte favorito es...{this.state.favorito}</h3>

                {

                    //Queremos dibujar cada deporte, pero usando la etiqueta del hijo
                    this.state.deportes.map((deporte,index)=>{
                        return (<HijoDeporte nombre={deporte} key={index} mostrarFavorito={this.mostrarFavorito}></HijoDeporte>);
                    })
                }
            </div>
        )
    }

}

export default PadreDeportes;

