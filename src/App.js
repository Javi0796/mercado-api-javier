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
    //Metodo que permite reiniciar la posición del scrolll al pasar de pagina
    const elemento =document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth', 'end');
  }

  paginaAnterior = () =>{
    //Lee la variable pagina
    let pagina = this.state.pagina;
    //Si la pagia es 1, significa que esta en la primera pagina, por lo cual no existe una pagina anterior
    if(pagina==1) return null;
    //Resta 1 a la variable pagina, para retroceder 1 pagina
    pagina--;
    this.setState(
      {
        pagina
      },() => {
        //Llama el metodo consultarApi para actualizar los datos
        this.consultarApi();
        this.scroll();
      }
      );

  }

  paginaSiguiente = () =>{
    //Lee la variable pagina
    let pagina = this.state.pagina;
    //Suma 1 a la variable pagina, para avanzar 1 pagina
    pagina++;
    //Actualiza los datos
    this.setState({
      pagina
    }, () => {
      //Llama el metodo consultarApi para actualizar los datos
      this.consultarApi();
      this.scroll();
    }    
    );

  }

  consultarApi = () =>{
    const pagina = this.state.pagina;
    //Modifica el estado de la variable pagina, agregando los datos extraidos del input
    const termino = this.state.termino;
    //Uso del api de mercado libre, hace el llamado con el dato requerido por el usuario
    const url = `https://api.mercadolibre.com/sites/MCO/search?q=${termino}&offset=${pagina}`
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultado => this.setState({ productos : resultado.results}))
    
  }

  datosBusqueda = (termino) =>{
    this.setState({
      //inicializa las variables con los datos requeridos
      termino : termino,
      pagina : 1
      
    }, () => {
      this.consultarApi();
    })
  }

  render(){
    return (
    <div className ="app container">
     <h1 class="text-center">Javier Armando Ríos</h1>
      <div className = "jumbotron jumbotron-fluid">
           
        <Buscador 
          datosBusqueda={this.datosBusqueda}
        />
      </div>
      <div class="row justify-content-center">
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
