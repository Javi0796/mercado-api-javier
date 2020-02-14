import React, { Component, createContext } from 'react';
import Producto from './Producto';
import Paginacion from './Paginacion';


class Busqueda extends Component {
    mostrarBusqueda = () => {
        const productos = this.props.productos;

        if(productos.length == 0) return null;


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
