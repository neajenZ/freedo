import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    rootCategories: [],
    selected: {},
    subCategories: {
        name: '',
        id: 0,
        subcategories: []
    }
};
const CategoriesSlice = createSlice({
    name: 'categories/slice',
    initialState,
    reducers: {
        setRootCategories(state, action) {
            state.rootCategories = action.payload;
        },
        setSubcategories(state, action) {
            state.subCategories = action.payload;
        }
    }
});
export const { setRootCategories, setSubcategories } = CategoriesSlice.actions;
export default CategoriesSlice.reducer;
