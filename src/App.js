import React, { Component } from 'react';
import Buscador from './componentes/Buscador';
import Busqueda from './componentes/Busqueda';

class App extends Component {

  state = {
    termino : '',
    productos : [],
    pagina : ''
  }

  scroll = () => {
    const elemento =document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth', 'end');
  }

  paginaAnterior = () =>{
    let pagina = this.state.pagina;
    if(pagina==1) return null;
    pagina--;
    this.setState(
      {
        pagina
      },() => {
        this.consultarApi();
        this.scroll();
      }
      );

  }

  paginaSiguiente = () =>{
    
    let pagina = this.state.pagina;
    pagina++;
    this.setState({
      pagina
    }, () => {
      this.consultarApi();
      this.scroll();
    }    
    );

  }

  consultarApi = () =>{
    const pagina = this.state.pagina;
    const url = `https://api.mercadolibre.com/sites/MCO/search?q=${this.state.termino}&offset=${pagina}`
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultado => this.setState({ productos : resultado.results}))
    
  }

  datosBusqueda = (termino) =>{
    this.setState({
      termino : termino,
      pagina : 1
      
    }, () => {
      this.consultarApi();
    })
  }

  render(){
    return (
    <div className ="app container">
     <h1>Javier Armando Ríos</h1>
      <div className = "jumbotron">
        <p className = "lead text-center">Mercado libre api</p> 
           
        <Buscador 
          datosBusqueda={this.datosBusqueda}
        />
      </div>
      <div className="row justify-content-center">
        <Busqueda
         productos={this.state.productos}
         paginaAnterior={this.paginaAnterior}
         paginaSiguiente={this.paginaSiguiente}
        />
      </div>  
   </div>
   );
  }
}

export default App;
