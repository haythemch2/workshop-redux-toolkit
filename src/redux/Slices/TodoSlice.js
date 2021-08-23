import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todolist:[
      {id:Math.random(),title:'todo item 1',description:'todo description 1',isDone:false},
      {id:Math.random(),title:'todo item 2',description:'todo description 2',isDone:false},
      {id:Math.random(),title:'todo item 3',description:'todo description 3',isDone:false},
      {id:Math.random(),title:'todo item 4',description:'todo description 4',isDone:false},
  ]
}

export const TodoSlice = createSlice({
  name: 'todolist',
  initialState,
  reducers: {
    AddTodo: (state, action) => {
    state.todolist.push(action.payload)
    },
    DeleteTodo:(state,action)=>{
    state.todolist=state.todolist.filter(el=>el.id!==action.payload.id)
    },
    DoneTodo:(state,action)=>{
     let i = state.todolist.findIndex(el=>el.id==action.payload.id)
     state.todolist[i]={...state.todolist[i],isDone:!state.todolist[i].isDone}
    },
    EditTodoItem:(state,action)=>{
        let i = state.todolist.findIndex(el=>el.id==action.payload.id)
        state.todolist[i]={... state.todolist[i],description:action.payload.description}  
    }
  },
})

// Action creators are generated for each case reducer function
export const { AddTodo,DeleteTodo,DoneTodo,EditTodoItem } = TodoSlice.actions

export default TodoSlice.reducer