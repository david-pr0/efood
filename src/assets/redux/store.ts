import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { modalSlice } from "./slices/modalSlice"

export const store = configureStore({
    reducer: {
        modal: modalSlice.reducer
    }
})

type RootState = ReturnType<typeof store.getState>

type Dispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<Dispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()