// import { func } from "prop-types";
import { useState, useEffect } from "react";

function Todo() {
  const [toDo, SetToDo] = useState("");
  const [toDos, SetToDos] = useState([]);
  const onChange = (event) => {
    SetToDo(event.target.value);
  }
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === ""){
      return;
    }
    SetToDos(currentArray => [toDo, ...currentArray]);
    SetToDo("");
  }
  useEffect(() => {
    console.log(toDos);
  }, [toDos]);
  return (
    <div>
      <h1>My To Dos({toDos.length}) </h1>
      <form onSubmit={onSubmit}>
        <input 
          value={toDo} 
          type="text" 
          placeholder="Write your to do"
          onChange={onChange} 
        />
        <button>Add To Do</button>
      </form>
      <hr/>
      <ul>
        {toDos.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}

export default Todo;