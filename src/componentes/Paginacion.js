import React from 'react';

const Paginacion = props => {
    return(
       < div className="py-3">
           <button onClick={props.paginaAnterior} type="button" className = "btn btn-primary mr-1 btn-lg"> &larr; Anterior</button>
           <button onClick={props.paginaSiguiente} type="button" className = "btn btn-primary btn-lg"> Siguiente &rarr;</button>
       </div>
    )
}

export default Paginacion;