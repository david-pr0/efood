import { createSlice } from "@reduxjs/toolkit";

export type Restaurant = {
    id: string,
    titulo: string,
    destacado: boolean,
    tipo: string,
    avaliacao: string,
    descricao: string,
    capa: string,
    cardapio: CardapioItem[]
}

type InitialState = Restaurant[]

export type CardapioItem = {
    foto: string,
    preco: number,
    id: string,
    nome: string,
    descricao: string,
    porcao: string
}

const initialState: InitialState = [{
    id: "1",
    titulo: "teste",
    destacado: true,
    tipo: "teste",
    avaliacao: "4.9",
    descricao: "teste",
    capa: "teste",
    cardapio: [
        {
            foto: "teste",
            preco: 50,
            id: "1",
            nome: "teste",
            descricao: "teste",
            porcao: "teste"
        }
    ]
}]

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setData: (state, {payload}) => {
            return { ...state, ...payload }
        }
    }
})

export const {setData} = dataSlice.actions