import { useState } from "react"
import { Link } from "react-router-dom";
export default function App5(){
    const [todos, setTodos] = useState([]);
    const [task,setTask] = useState();
    const handleSubmit = () => {
        setProducts([...todos, task]);
        setTask('');
    };
    const handleDelete = (task) => {
        setTodos(todos.filter((value) => task !== index));
    }
    return (
        <div>
            <h3>app5</h3>
            <p><input type="text" value={task} onChange={(e)=>setTask(e.target.value)} placeholder="fmefme"/>
            <button onClick={handleSubmit}>Submit</button>
            <hr />
            {todos.map((value, index) => (
                <li key={index}>
                    {value}-<button onClick={()=>handleDelete(task)}>Del</button></li>
            ))}
            </p>
        </div>
    )
}