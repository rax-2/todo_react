import { createSlice } from '@reduxjs/toolkit'

function LoadData() {
  // try {
  //   let a = JSON.parse(localStorage.getItem('RaxTodo'))
  //   return (a)
  // } catch (err) {
  //   console.log('error e');
  //   return []
  // }
  if (localStorage.getItem('RaxTodo')) {
    return (JSON.parse(localStorage.getItem('RaxTodo')))
  } else {
    return []
  }
}


export const DataSlice = createSlice({
  name: 'ToDoData',
  initialState: {
    value: LoadData(),
  },
  reducers: {
    deleteTodo: (state, action) => {
      const index = action.payload;
      state.value = state.value.filter((_, i) => i !== index)
      localStorage.setItem('RaxTodo', JSON.stringify(state.value))
      LoadData()
    },
    addTodo: state => {
      state.value.push('')
      localStorage.setItem('RaxTodo', JSON.stringify(state.value))
      LoadData()
    },
    editTodo: (state, action) => {
      const { index, inputValue } = action.payload;
      if (index >= 0 && index <= state.value.length) {
        state.value[index] = inputValue; // Overwrite specific index
      }
      localStorage.setItem('RaxTodo', JSON.stringify(state.value))
      LoadData()
    }
  }
})


export const { deleteTodo, addTodo, editTodo } = DataSlice.actions

export default DataSlice.reducer