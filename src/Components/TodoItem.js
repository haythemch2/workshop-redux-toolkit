import React from 'react'
import { Button, Card } from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import { DeleteTodo, DoneTodo } from '../redux/Slices/TodoSlice'

const TodoItem = ({item}) => {
    const dispatch = useDispatch()
   const handleDone=()=>{
       dispatch(DoneTodo({id:item.id}))
   }

    const handleDelete=()=>{
        dispatch(DeleteTodo({id:item.id}))
    }
    return (
        <div>
            <Card style={{backgroundColor:'grey',display:'flex'}}>
                <Card.Body>
                 <Card.Title style={{color:'white'}}>{item.title}</Card.Title>
                 <Card.Text>{item.description}</Card.Text>
                </Card.Body>
                <h6 style={{color:item.isDone?"green":"red"}}>{item.isDone?"done":"not Done"}</h6>
                <Button style={{width:'200px'}} onClick={()=>handleDelete()} variant='danger'>Delete</Button>
                <Button style={{width:'200px'}} onClick={()=>handleDone()} variant='success'>toggle!</Button>
            </Card>
           
        </div>
    )
}

export default TodoItem
