//Debemos importat components from react
import {Component} from 'react';

//Podemos usar funciones externas, y en estas no se puede utilizar nada de la clase
function miFuncion() {
    console.log("Funcion externa a la clase");
}


class Contador extends Component {

    //Zona de declaracion de variables
    //No se usan ni var, ni const, ni nada
    numero = 1;

    //Queremos un metodo para incrementar ese numero
    incrementarNumero = () => {
        //Para acceder a los objetivos/variables de la clase usamos this.
        console.log(this.numero);
        this.numero = this.numero + 1;
    }

    //El concepto state es el mismo
    //Usamos state a nivel de clase para inicializar los elementos de su interior
    //En este ejemplo queremos cambiar un valor de un contador
    state = { valor: parseInt(this.props.Inicio) };

    //Para modificar el valor del state usamos un metodo de la clase llamado setState
    incrementarValor = () => {
            this.setState({ valor: this.state.valor + 1});
    }



    //Toda la clase debe contener un render
    //El render es el dibujo
    //Y se cambia cada vez que realizamos un state
    //El codigo interno del render es como usar function()
    render() {
        return (
            <div>
                <h1>Contador JSX ES9</h1>
                <h2 style={{ color: "blue" }}> Inicio {this.props.Inicio}</h2>
                <h2 style={{ color: "red" }}> Valor del state: {this.state.valor}</h2>

                <button onClick={this.incrementarValor}>Incrementar Valor State</button>

                {/* Tambien podemos usar funciones anonimas dentro del evento*/}
                <button onClick={ () => {

                    //Para llamar a cualquier elemento de la funcion  fuera de la clase no hace falta this
                    miFuncion();

                    //Si llamamos a elementos de la clase se hace con this
                    this.incrementarNumero(); 
                }}>
                   Suma 
                </button>
            </div>
        );
    }

}
export default Contador;