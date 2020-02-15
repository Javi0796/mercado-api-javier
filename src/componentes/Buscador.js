import React, { Component } from 'react';

class Buscador extends Component {

    busquedaRef = React.createRef();

    obtenerDatos = (e) => {
        e.preventDefault();
        //tomamos el valor del input
        const variable = this.busquedaRef.current.value; 
        
        //enviamos la variable tomada con anterioridad al componente principal a traves de props
        this.props.datosBusqueda(variable);      
    }

    render() {
        return (
            <form onSubmit = {this.obtenerDatos}>
                <div className = "row">
                    <div className = "form-group col-md-8">
                        <input ref={this.busquedaRef} type= "text" className = "form-control form-control-lg" placeholder="Busca
                         el producto deseado"/>
                     
                    </div>
                    <div className = "form-group col-md-4">
                        <input type= "submit" className = "btn btn-primary btn-block " value ="Buscar"/>                     
                    </div>
                </div>
            </form>
         );
    }
}

export default Buscador;
