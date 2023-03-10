import React from "react";
import styled from "styled-components";

const Container = styled.section`
  background: #ffebb4;
  padding: 20px;

  button {
    background-color: #ffacac;
    color: black;
    border: none;
    padding: 10px;
    margin-top: 10px;
    cursor: pointer;
    font-weight: 800;
  }

  h1 {
    color: black;
    margin-bottom: 20px;
  }

  input {
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    border: none;
    margin-right: 10px;
    width: 300px;
  }

  ol li {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5px;
  }
`;

// To Do
export default class App extends React.Component {
  state = {
    tarefa: "",
    lista: []
  };

  handleChange = (e) => {
    this.setState({
      tarefa: e.target.value
    });
  };

  addTarefa = () => {
    this.setState({
      lista: this.state.lista.concat({
        tarefa: this.state.tarefa
      }),

      tarefa: ""
    });
  };

  delete = (index) => {
    this.setState({
      lista: this.state.lista.filter((item, i) => i !== index)
    });
  };

  render() {
    return (
      <>
        <Container>
          <h1>To Do List - Lista de Tarefas</h1>
          <input value={this.state.tarefa} onChange={this.handleChange} />
          <button onClick={this.addTarefa}>ADICIONAR TAREFA</button>
          <ol>
            {this.state.lista.map((item, index) => (
              <li>
                {item.tarefa}
                <button onClick={() => this.delete(index)}>x</button>
              </li>
            ))}
          </ol>
        </Container>
      </>
    );
  }
}
