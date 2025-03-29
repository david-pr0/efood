import { createSlice } from "@reduxjs/toolkit";

type ActiveItem = {
    name: string
    img: string
    desc: string
    porcao: string
    preco: string
}

const initialState: ActiveItem = {
    name: "teste",
    img: "teste",
    desc: "teste",
    porcao: "teste",
    preco: "teste"
}

export const activeModalSlice = createSlice({
    name: "active-item",
    initialState,
    reducers: {
        setActiveItem: (state, {payload}) => {
            return {...state, ...payload}
        }
    }
})

export const {setActiveItem} = activeModalSlice.actions