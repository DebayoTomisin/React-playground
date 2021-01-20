import {useState} from "react"

function Todo({todo, index}){
    return(
        <div>
            <h4>{todo.text}</h4>
        </div>
    )
}

function TodoForm({addTodo}) {
    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!value) return
        addTodo(value);
        setValue('')
    }
    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                placeholder="enter a value"
                value={value}
                onChange= {e => setValue(e.target.value)}
            />
        </form>
    )
}

function Hooks(){
    
    const [todos, setTodos] = useState([
        
        {
            text: "Learn about React",
            isCompleted : false
        },
        {
            text: "Meet friend for lunch",
            isCompleted: false
        },
        {
            text: "Build really cool todo app",
            isCompleted: false
        }
    ])

    const addTodo = text => {
        const newTodos = [...todos, {text}]
        setTodos(newTodos)
    }
    
    return(
        <div className="hooks">
            {todos.map((todo, index) => (
                <Todo todo={todo} key={index} index={index}/>
            ))}  
            <TodoForm addTodo={addTodo}/>         
        </div>
    )
}

export default Hooks