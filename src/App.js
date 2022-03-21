import Form from './components/Form';
import './App.css';
import {useState, useEffect} from 'react';
import TodoList from './components/TodoList';


function App() {

  const [todos, setTodos] = useState([]);

      // Fetching the data from local storage whenever the app loads
  useEffect(() =>{
    getLocalTodos();
    console.log("Using Get");
  },[]);

  // Saving the data to local storage whenever the data changes
  useEffect(() => {
    saveLocalTodos();
  }, [todos]);

  const saveLocalTodos = () =>{
    console.log("Saving", todos);
    localStorage.setItem('todos',JSON.stringify(todos))
  }

  const getLocalTodos = () =>{
    console.log("Get ", todos)
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos',JSON.stringify([]));
    }
    else{
      let todoLocal= JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal)
      console.log(todos);
    }
  }


  function addTodo(task){
    console.log(task);
    setTodos([...todos, {
      id: Math.random(),
      name: task,
      completed: false
    }]);
  }

  return (
    <div className="App">
      <div className='card'>
        <div className='container'>
          <Form addTodo={addTodo}/>
          <TodoList todos={todos}
          setTodos={setTodos}/>
        </div>
      </div>
    </div>
  );
}

export default App;
