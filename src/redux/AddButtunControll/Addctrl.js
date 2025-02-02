import { createSlice } from '@reduxjs/toolkit'

export const Addctrl = createSlice({
    name: 'AddControl',
    initialState: {
        value: false
    },
    reducers: {
        on: state => {
            state.value = true
        },
        off: state => {
            state.value = false
        },
        setSwitchofAddCtrl: (state,action)=>{
            const val = action.payload
            state.value = val
        }

    }
})

// Action creators are generated for each case reducer function
export const { on, off,setSwitchofAddCtrl } = Addctrl.actions

export default Addctrl.reducer