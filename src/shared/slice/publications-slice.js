import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    publicationList: [],
    publication: {
        id: '',
        title: '',
        photoUrls: [],
        date_of_registration: '',
        price: 0,
        language_id: '',
        views: 0,
        author_id: '',
        description: '',
        category_id: ''
    },
    comments: []
};
const PublicationsSlice = createSlice({
    name: 'ad/slice',
    initialState,
    reducers: {
        setPublications(state, action) {
            state.publicationList = action.payload;
        },
        setPublication(state, action) {
            state.publication = action.payload;
        },
        setComments(state, action) {
            state.comments = action.payload;
        }
    }
});
export const { setPublications, setPublication, setComments } = PublicationsSlice.actions;
export default PublicationsSlice.reducer;
