import { createSlice,nanoid} from "@reduxjs/toolkit";

const intialState = {
    todos:[{id:"abc",task:"demo_task",isDone:"false"}]
};

export const todoSlice = createSlice({
    name:"todo",
    intialState,
    reducers:{//state , action 
        addTodo:(state,action)=>{
            const newTodo={
                id:nanoid(),
                task:action.payload,
                idDone:false
            }state.todos
        }
    }
})