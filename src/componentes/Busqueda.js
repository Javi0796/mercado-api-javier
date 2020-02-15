import React, { Component, createContext } from 'react';
import Producto from './Producto';
import Paginacion from './Paginacion';


class Busqueda extends Component {
    mostrarBusqueda = () => {
        //Lee el dato solicitado en el input por el usuario y lo guarda en la variable
        const productos = this.props.productos;
        //Si la variable esta vacia, retorna sin modificar nada
        if(productos.length == 0) return null;

        //Invoca los componentes para mostrar los productos y la paginación
        return (
            <React.Fragment>
                <div className="col-12 p-5 row">
                    {productos.map(producto => (
                        <Producto
                            key={producto.id}
                            producto={producto}
                        />
                    ))}
                </div>
                <Paginacion
                    paginaAnterior={this.props.paginaAnterior}
                    paginaSiguiente={this.props.paginaSiguiente}
                />
            </React.Fragment>
        )
    }
    
    render( ){
        return(
            <React.Fragment>
                { this.mostrarBusqueda()}
            </React.Fragment>
        );
    }


}

export default Busqueda;
