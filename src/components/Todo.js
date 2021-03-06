import React from 'react';

const Todo = ({setTodos,todo,todos,text}) => {
    const deleteHandler= () =>{
        setTodos(todos.filter((el) => el.id!==todo.id))
    }
    const completeHandler = () =>{
        setTodos(todos.map((item) => {
            if(item.id===todo.id){
                return{
                    ...item,
                    completed: !item.completed
                }
            }
            return item;
        }))
    }
    return (
        <div>
            <div className='todo'>
                <li data-testid="task" id="task" className={`todo-item ${todo.completed?"completed":''}`} >{text}</li>
                <button onClick={completeHandler} data-testid="complete-btn" className='complete-btn'><i className="fas fa-check"></i></button>
                <button onClick={deleteHandler} data-testid="delete-btn" className='trash-btn'><i className="fas fa-trash"></i></button>
            </div>
        </div>
    );
};

export default Todo;