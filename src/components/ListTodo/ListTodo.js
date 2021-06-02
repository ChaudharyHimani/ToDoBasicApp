import Todo from '../Todo/Todo';
import './ListTodo.css';

const ListTodo = ({todos, setTodos}) => {

    return (  
        <div className="ListTodo">
        {todos.map((todo) => {
            return <Todo key={todo.id} todos={todos} todo={todo} setTodos={setTodos} />;
        })}
        </div>
    );
}
 
export default ListTodo;