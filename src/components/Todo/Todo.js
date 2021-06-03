import {useState} from 'react';
import InsertTodo from '../InsertTodo/InsertTodo';
import './Todo.css';

const Todo = ({todo, setTodos, todos}) => {
    const deleteTodo = () => {
        setTodos(todos.filter((item) => {
            return item.id !== todo.id;
        }));
    }
    const[edit, setEdit] = useState(false)

    const editTodo = () => {
        setEdit(true)
    }
    return (
        edit ? <InsertTodo edit task={todo} todos ={todos} setTodos = {setTodos} onChange = {() => {
            setEdit(false)
        } }/> : 
        <div className="Todo">
            <div className="todo__name">
                <h4>{todo.name}</h4>
            </div>
            <div className="todo__buttons">
                <button onClick={editTodo}>Edit</button>
                <button onClick={deleteTodo}>Delete</button>
            </div>
        </div>
      );
}
 
export default Todo;
