import './Todo.css';

const Todo = ({todo, setTodos, todos}) => {
    const deleteTodo = () => {
        setTodos(todos.filter((item) => {
            return item.id !== todo.id;
        }));
    }
    return (
        <div className="Todo">
            <div className="todo__name">
                <h4>{todo.name}</h4>
            </div>
            <div className="todo__buttons">
                <button >Edit</button>
                <button onClick={deleteTodo}>Delete</button>
            </div>
        </div>
      );
}
 
export default Todo;
