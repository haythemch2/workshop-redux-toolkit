import React,{useState} from 'react'
import { Form } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem';
import { Link } from 'react-router-dom';

const TodoList = () => {
   const [doneFilter, setDoneFilter] = useState(false)
    const list = useSelector(state => state.todo.todolist)
   console.log(list);

    return (
        <div>
            <Form>
                <Form.Select onChange={(e)=>setDoneFilter(e.target.value)}>
                    <option value={true}>Done</option>
                    <option value={false}>not Done</option>
                </Form.Select>
            </Form>
            {list.filter(el=>el.isDone==doneFilter).map(item=>(
                <Link to={`/${item.id}`}>
                <TodoItem item={item}/>
                </Link>
            ))}
            
        </div>
    )
}

export default TodoList
