import React, {Component} from 'react';

import ElementoLista from './components/ElementoLista';
import Pokemon from './components/Pokemon';

const Persona = (props) => {
  console.log(props)
  return (
    <div>
      nombre: {props.nombre}
      <br/>
      edad: {props.edad}
    </div>
  )
}


class App extends Component {


  state = {
    lista: [
      {nombre: 'Germán'},
      {nombre: 'Harland'},
      {nombre: 'JP'},
    ],
    obj: {
      nombre: 'JP',
      edad: 32 
    },
    pokemon: [],
    isIronhacker: false,
    tarea: "",
    tareas: []
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=964')
      .then(res => res.json())
      .then(data => {
        this.setState({pokemon: data.results});
      })
      .catch(err => console.log(err))
  }


  addTask = e => {
    e.preventDefault();
    let tareas = [...this.state.tareas];
    tareas.push(e.target.tarea.value)
    this.setState({
      tareas: tareas
    });
  }

  saveTask = e => {
    this.setState({
      tarea: e.target.value
    });
  }

  deleteTask = i => {
    console.log(i)
    let tareas = [...this.state.tareas];
    tareas.splice(i,1);
    this.setState({tareas})
  }



  render() {

    // let mensaje = this.state.isIronhacker ? <p>Es ironhacker</p> : <p>No es Ironhacker</p>
    // let mensaje = this.state.isIronhacker || <p>Este es otra manera de usar conditional rendering</p>

    return (
      <div>

        {/* { this.state.lista.map((e, i) => {
          return (<div key={i}>
                    nombre: {e.nombre}
                  </div>)
        })} */}

        {/* {this.state.lista.map((elemento, indice) => {
          return <ElementoLista nombre={elemento.nombre} key={indice} />
        })} */}
        

        {/* <Persona
          {...this.state.obj}
        /> */}
        
        {/* {
          this.state.pokemon.map((e, i) => {
            return <Pokemon url={e.url} nombre={e.name} key={i} />
          })
        } */}

        {/* {mensaje} */}



        <form onSubmit={this.addTask}>
          <input
            onChange={this.saveTask}
            defaultValue={this.state.tarea}
            type="text"
            name='tarea'/>
          <input type="submit" value="Guardar"/>
        </form>


        <div>
          <h1>tareas</h1>
          {
            this.state.tareas.length <= 0 ? 'No hay tareas' : this.state.tareas.map((e, i) => {
              return <p onClick={() => this.deleteTask(i)} key={i}>{e}</p>
            })
          }
        </div>



        
      </div>
    );
  }
}

export default App;
