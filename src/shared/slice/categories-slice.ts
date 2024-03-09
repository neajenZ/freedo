import { createSlice } from "@reduxjs/toolkit";
import { IRootCategory } from "src/app/types/categories";
import { IAction } from "src/app/types/indexTypes";

interface IInitialState {
    rootCategories: IRootCategory[],
    selected: any
}

const initialState:IInitialState = {
    rootCategories: [],
    selected: {

    }
}

const CategoriesSlice = createSlice({
    name: 'categories/slice',
    initialState,
    reducers: {
        setRootCategories (state, action: IAction<IRootCategory[]>) {
            state.rootCategories = action.payload
        }
    }
})

export const {
    setRootCategories
} = CategoriesSlice.actions

export default CategoriesSlice.reducer