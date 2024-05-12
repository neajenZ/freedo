import {createSlice} from "@reduxjs/toolkit";
import {Publication} from "src/modules/publications/api/publication-api.types.ts";
import {IComment} from "src/app/types/comments.ts";
import {IAction} from "src/app/types/indexTypes.ts";


interface IInitialState {
    publicationList: Publication[],
    publication: Publication,
    comments: IComment[]
}

const initialState: IInitialState = {
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
}

const PublicationsSlice = createSlice({
    name: 'ad/slice',
    initialState,
    reducers: {
        setPublications (state, action) {
            state.publicationList = action.payload
        },
        setPublication (state, action) {
            state.publication = action.payload
        },
        setComments (state, action: IAction<IComment[]>) {
            state.comments = action.payload
        }
    }
})

export const {
    setPublications,
    setPublication,
    setComments
} = PublicationsSlice.actions

export default PublicationsSlice.reducer