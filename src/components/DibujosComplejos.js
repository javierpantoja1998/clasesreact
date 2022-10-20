//Debemos importat components from react
import {Component} from 'react';


class DibujosComplejos extends Component {
    
    //Metodo que nos devolvera una serie de numeros con formato html
    dibujarNumeros = () => {

        //Declaramos un array para almacenar los numeros
        //Dicho array no tendra solamente numeros
        //Si no que tambien tendra que contener html
        var lista = [];
        // Una lista contiene un metodo push() para añadir elementos
        //Crear un bucle para generar numeros y añadirlos a nuestra coleccion
        for (let i = 0; i < 10; i++) {
            var numero = parseInt(Math.random() * 100)+1;

            //El dibujo html se almacena en la coleccion junto con los elementos a dibujar
            lista.push(<li key={i}>{numero}</li>);
            
        }
        return lista;
    }

    render() {
        return (
            <div>
                <h1>Dibujos complejos</h1>
                <ul>
                    {this.dibujarNumeros()}
                </ul>
            </div>
        );
    }
}
export default DibujosComplejos; 