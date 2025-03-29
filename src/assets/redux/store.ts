import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { modalSlice } from "./slices/modalSlice"
import { dataSlice } from "./slices/dataSlice";
import { activeModalSlice } from "./slices/activeModalSlice";

export const store = configureStore({
    reducer: {
        modal: modalSlice.reducer,
        data: dataSlice.reducer,
        activeModalSlice: activeModalSlice.reducer
    }
})

type RootState = ReturnType<typeof store.getState>

type Dispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<Dispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()