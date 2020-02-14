import React from 'react';

const Producto = (props) => {

    const {permalink, thumbnail, title, price, available_quantity,seller_id} = props.producto;

    return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
               <img src={thumbnail} alt={title} className="card-img-top"/>
               <div className ="card-body">                  
                   <p className="card-text"> Precio ${price}</p>
                   <p className="card-text"> Cantidad disponible {available_quantity}</p>
                   <p className="card-text"> Id vendedor {seller_id}</p>
                   <a href={permalink} target="_blank" className="btn btn-primary btn-block">Comprar</a>
               </div>
            </div>
        </div>
    )

}

export default Producto;