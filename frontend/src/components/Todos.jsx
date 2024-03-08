import PropTypes from 'prop-types'; 

export function Todos({todos}){
     
    
    return <div>
        {todos.map((todo,index) =>{
                return <div key={index}>
                    <h1>{todo.title}</h1>
                    <h1>{todo.description}</h1>
                    <button>{todo.completed == true ? "completed": "mark as completed"}</button>
                </div>
            })}
    </div>
   
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
  };