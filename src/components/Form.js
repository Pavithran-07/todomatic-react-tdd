import React from "react";
import {useState} from "react";

function Form(props){

    const [name, setName] = useState("");

    function handleNameChange (event) {
        setName(event.target.value);
    }

    function submitTodo(event) {
        event.preventDefault();
        if(name !== ""){
            props.addTodo(name);
            setName("");
        }
    }

    return(
        <form onSubmit={submitTodo} >
            <h4><b>Todo List</b></h4>
            <input type="text" className="todoInput" id="input" value={name} onChange={handleNameChange} data-testid="input" placeholder="Add Todo..." />
            <button type="submit" className="addTodoBtn" data-testid="addBtn" disabled={name.length>0?false:true} >Add</button>
            <hr></hr>
        </form>
    );
}

export default Form;