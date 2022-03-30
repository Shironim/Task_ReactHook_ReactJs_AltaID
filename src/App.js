import React, { useState } from "react";
import './App.css';
import Form from "./Components/Form";
import Header from "./Components/Header";
import Card from "./Components/Card";


const App = () => {
  const [inputs, setInputs] = useState({
    inputTodo: "",
  });
  const [listTodo, setListTodo] = useState([]);
  // console.log('ini input', inputs);
  // console.log('ini list', listTodo);
  // console.log(listTodo);
  return (
    <div className="App">
      <Header title="TodoList Ku" />
      <Form
        inputs={inputs}
        setInputs={setInputs}
        listTodo={listTodo}
        setListTodo={setListTodo}
      />
      <Card
        listTodo={listTodo}
        setListTodo={setListTodo}
      />

    </div>
  );
}

export default App;
