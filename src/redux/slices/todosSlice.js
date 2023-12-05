import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
      // return state.map((folder) => folder.id === action.payload.folderId{
      //   folder.todos.filter(todo=>todo.id!==action.payload.todoId)
      // }); [{id},{id}]
    },
    toggleCompleted: (state, action) => {
      state.forEach((todo) => {
        if (todo.id === action.payload) {
          todo.isCompleted = !todo.isCompleted;
        }
      });
    },
    editTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.find((t) => t.id === id);
      if (todo) {
        todo.text = text;
      }
    },
  },
});
export const { addTodo, deleteTodo, toggleCompleted, editTodo } =
  todoSlice.actions;
export const selectTodo = (state) => state.todos;
export default todoSlice.reducer;



// state = [
//   {
//     folderId:"A",
//     nama:'test',
//     todos:[
//       {
//         folderId:"A",
//         id:1,
//         name:'ggg'
//       },
//       {
//         folderId:"A",
//         id:2,
//         name:'ffff'
//       },
//     ]
//   }
// ]


// folders = [
//   {
//     folderId:"A",
//     nama:'test'
//   },
//   {
//     folderId:"B",
//     nama:'test'
//   }
// ]

// todos =[
//   {
//     folderId:"A",
//     id:1,
//     name:'ggg'
//   },
//   {
//     folderId:"A",
//     id:2,
//     name:'ffff'
//   },
//   {
//     folderId:"B",
//     id:2,
//     name:'ffff'
//   },
// ]