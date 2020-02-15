import React from 'react';

const Producto = (props) => {

    const {permalink, thumbnail, title, price, available_quantity, seller} = props.producto;

    return(
        <div>
            <div className="col-12 col-sm-5 col-md-5 col-lg-3 mb-5 row no-gutters" >
                <div className="card text-center" >
                    <img src={thumbnail} alt={title} className="card-img-top img-fluid"/>
                    <div className ="card-body">    
                        <p className="card-text"> {title} </p>              
                        <p className="card-text"> Precio ${price}</p>
                        <p className="card-text"> Cantidad disponible {available_quantity}</p>
                        <p className="card-text"> Id vendedor {seller.id}</p>
                        <a href={permalink} target="_blank" className="btn btn-outline-primary btn-block">Comprar</a>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Producto;