import { createSlice } from "@reduxjs/toolkit";
import {IRootCategory, ISubcategory} from "src/app/types/categories";
import { IAction } from "src/app/types/indexTypes";

interface IInitialState {
    rootCategories: IRootCategory[],
    subCategories: ISubcategory
    selected: any
}

const initialState:IInitialState = {
    rootCategories: [],
    selected: {

    },
    subCategories: {
        name: '',
        id: 0,
        subcategories: []
    }
}

const CategoriesSlice = createSlice({
    name: 'categories/slice',
    initialState,
    reducers: {
        setRootCategories (state, action: IAction<IRootCategory[]>) {
            state.rootCategories = action.payload
        },
        setSubcategories (state, action) {
            state.subCategories = action.payload
        }
    }
})

export const {
    setRootCategories,
    setSubcategories
} = CategoriesSlice.actions

export default CategoriesSlice.reducer