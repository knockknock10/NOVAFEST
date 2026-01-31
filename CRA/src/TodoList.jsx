import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


export default function TodoList(){
    let[todos,setTodos] = useState([{ task:"Sample Task",id: uuidv4(),isDone:false}]);  //["Sample Task"]  array of object
    let[newTodo,setNewTodo] = useState("");
    let addNewTask = () =>{
        setTodos((prevTodos) =>{
            return [...prevTodos,{task:newTodo,id:uuidv4(),isDone:false}]});  //,newTodo
        setNewTodo("");
    }
    let updateTodoValue=(event)=>{
        setNewTodo(event.target.value);
    }
    
    let deleteTodo = (id)=>{
       //let newTodo = todos.filter((todo)=> todo.id!=id);
       //setTodos(todos.filter((todo)=> todo.id!=id));
       //setTodos((prevTodos)=>todos.filter((prevTodos)=> prevTodos.id!=id));
        setTodos((prevTodos)=>
            prevTodos.filter((todo)=> todo.id!=id)
        );
    }
    
    let UpperCaseTask = () =>{
        setTodos((todos)=>
            todos.map((todo)=>{
                return{
                    ...todo,
                    task: todo.task.toUpperCase(),
                };
            })
        );
    } 
    let upperOne =(id)=>{
        setTodos((todos)=>
            todos.map((todo)=>{
                if(todo.id==id){
                    return{
                        ...todo,
                        task: todo.task.toUpperCase(),
                    }
                }else{
                    return todo
                }
            })
        );
    }

    let taskDone = (id)=>{
        setTodos((todos)=>
            todos.map((todo)=>{
                if(todo.id==id){
                    return{
                        ...todo,
                        isDone: !todo.isDone,
                    }
                }else{
                    return todo
                }
            })
            
        )
    }
    
    return (
      <div>
        <input 
            placeholder="Add a Task" 
            value={newTodo} 
            onChange={updateTodoValue}>  
        </input>
        &nbsp;&nbsp;
        <button onClick={addNewTask}>Add Task</button>
        <br/><br/><br/><br/> 
        <hr></hr>
        <h4>Todo List</h4>
        
        <ul>
            {
                todos.map((todo)=>(
                    <li key={todo.id}>
                        <span 
                        style={{textDecoration:todo.isDone? "line-through" : "none"}}
                        >
                            {todo.task}
                        </span>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={()=>deleteTodo(todo.id)}>delete</button>
                        <button onClick={()=>upperOne(todo.id)}>UpperCase</button>
                        <br/>
                        <button onClick={()=>taskDone(todo.id)}>IsDone</button>
                    </li>
                ))
            }
        </ul>
        <button onClick={UpperCaseTask}>UpperCase All</button>
      </div>
  );
}