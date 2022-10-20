//Debemos importat components from react
import {Component} from 'react';

class DibujoComplejoArray extends Component {

    state = {
        nombres: ["Juan", "Javi", "Pepe", "Lunin", "Pablo", "Juancho"],
    }
    nuevoNombre = () => {
        //Hacemos el push para añadir el nombre
        this.state.nombres.push("Benzema");
        //Añadir un nuevo elemento
        this.setState({
            
            nombres: this.state.nombres
        })
    }
    

    render() {
        return(
            <div>
                <h1>Dibujo Complejo Array</h1>
                <button onClick= {this.nuevoNombre}>Añadir</button>
                {
                    //Codigo logico con lenguaje React
                    //Usamos el map para hacer un bucle
                    this.state.nombres.map((name,index)=> {
                        //Este codigo se ejecuta por cada elemento
                        //No se puede dejar vacio
                        //Siempre debe devolver un return
                        return (<h3  key={index}style={{color: 'green'}}>
                            {name}
                        </h3>)
                    })
                }
            </div>
        )
    }
}

export default DibujoComplejoArray;

