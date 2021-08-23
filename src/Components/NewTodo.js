import React,{useState} from 'react'
import { Container, Form,Alert,Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { AddTodo } from '../redux/Slices/TodoSlice'

const NewTodo = () => {
    const dispatch = useDispatch()

    const [newItem, setNewItem] = useState({title:'',description:'',isDone:false,id:Math.random()})


    const handleAdd=()=>{
     dispatch(AddTodo(newItem))
    }
    return (
        <div style={{marginTop:'5rem'}}>
            <Container>
                <h2 style={{marginBottom:'2rem'}}>Add New Todo</h2>
                <Alert></Alert>
            <Form>
                <Form.Label><h4>Todo Title</h4></Form.Label>
                <Form.Control type='text' onChange={(e)=>setNewItem({...newItem,title:e.target.value})}/>
                <Form.Label><h4>Todo Description</h4></Form.Label>
                <Form.Control type='text' onChange={(e)=>setNewItem({...newItem,description:e.target.value})}/>
            </Form>
            <Button onClick={()=>handleAdd()} variant='outline-success' style={{width:'300px',marginTop:'2rem',marginBottom:'5rem'}}>ADD !</Button>
            </Container>
        </div>
    )
}

export default NewTodo
