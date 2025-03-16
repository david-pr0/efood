import { createSlice } from "@reduxjs/toolkit"

type InitialState = {
    isVisible: boolean
}

const initialState: InitialState = {
    isVisible: false
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setVisible: (state) => {
            state.isVisible = true
        },
        setNotVisible: (state) => {
            state.isVisible = false
        }
    }
})

export const {
    setVisible,
    setNotVisible
} = modalSlice.actions