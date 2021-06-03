import { useEffect, useState } from "react";
import "./InsertTodo.css";
import { v1 } from 'uuid';

const InsertTodo = ({todos,setTodos, task, edit, onChange}) => {
    const [todo, setTodo] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = {
            name: todo,
            id: v1()
        }
        setTodos([...todos, newTodo]);
        setTodo("");
    }
    useEffect(() => {
        task && task.name && setTodo(task.name)
    }, [task])
    
    console.log(edit)
    return (
        <div className="insertTodo">
        { edit ? <form onSubmit={handleSubmit}> 
                <input type="text" value={todo} onChange={(e) => {
                    setTodo(e.target.value)}
                 } placeholder="" name="add" />
                <button type="submit" onClick= {() => onChange()} >Edit</button>
            </form> :
            <form onSubmit={handleSubmit}> 
                <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} placeholder="" name="add" />
                <button type="submit">Add</button>
            </form>
        }
        </div>
    );
}
 
export default InsertTodo;