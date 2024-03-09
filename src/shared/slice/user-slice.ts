import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {axiosInstance} from "src/shared/utils/axiosInstance.ts";
import {ICreatedAdData, IUserAuth, IUserData} from "src/app/types/user.ts";
import Cookies from "js-cookie";
import {postSubcategories} from "src/shared/slice/Api/postSubcategories.ts";
import {getCategories} from "src/shared/slice/Api/getCategories.ts";
import {IRootCategory} from "src/app/types/categories.ts";
import {getUserData} from "src/shared/slice/Api/getUserData.ts";
import {getUpdatedToken} from "src/shared/slice/Api/getUpdatedToken.ts";
import {getPublications} from "src/shared/slice/Api/getPublications.ts";

export const postUserAuth = createAsyncThunk<any, IUserAuth>(
    `get-info/user`,
    async (data, {rejectWithValue}) => {
        try {
            const response = await axiosInstance.post('/auth/token', data)
            return response.data
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)


// Подумать над redirect
interface IInitialState {
    isLoading: boolean,
    isError: boolean,
    userData: IUserData,
    isAuth: boolean,
    isRedirect: boolean,
    isUpdateToken: boolean,
    isRecoverPass: boolean,
    typeAuth: 'register' | 'login' | 'initial',
    role: 'customer' | 'executor',
    categories: IRootCategory[],
    publications: any[],
    subcategoriesList: {
        name: string,
        id: string,
        subcategories: string[]
    },
    createAdInfo: {
        category: string,
        subCategory: string,
        data: ICreatedAdData
    }
}

type UserRole = 'customer' | 'executor'
interface IAction <T> {
    type: string,
    payload: T
}


// Рефакторить
const initialState:IInitialState = {
    isLoading: false,
    isError: false,
    isAuth: false,
    isRedirect: false,
    isUpdateToken: false,
    isRecoverPass: false,
    userData: {
        id: '',
        first_name: '',
        last_name: '',
        email: '',
        date_of_registration: '',
        photo_url: ''
    },
    typeAuth: "initial",
    role: 'customer',
    categories: [

    ],
    publications: [],
    subcategoriesList: {
        name: '',
        id: '',
        subcategories: []
    },
    createAdInfo: {
        category: '',
        subCategory: '',
        data: {
            type: 'executor',
            status: null,
            title: '',
            description: '',
            images: '',
            price: {
                value: 0,
                currency: 'rub'
            }
        }
    }
}

const UserSlice = createSlice({
    name: 'user-slice',
    initialState,
    reducers: {
        setUserData (state, action) {
            console.log(action)
            state.isAuth = true
            state.userData = action.payload
        },
        setPublications (state, action) {
            state.publications = [...action.payload]
        },
        setLogout (state) {
            state.isAuth = false
        },
        setRecoverPass (state) {
            state.isRecoverPass = true
        },
        changeTypeAuth (state, action) {
            state.typeAuth = action.payload
        },
        changeRole (state, action:IAction<UserRole>) {
            state.role = action.payload
        },
        changeCreatedAdRole (state, action:IAction<UserRole>) {
            state.createAdInfo.data.type = action.payload
        },
        createdAdStatus (state, action) {
            state.createAdInfo.data.status = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(postUserAuth.pending, state => {
            state.isLoading = true
        })
            .addCase(postUserAuth.fulfilled, (state, action) => {
                state.isLoading = false
                state.isAuth = true
                state.isRedirect = true
                Cookies.set('accessToken', action.payload.access_token)
                Cookies.set('refreshToken', action.payload.refresh_token)

            })
            .addCase(postUserAuth.rejected, (state) => {
                state.isLoading = false
                state.isError = true
            });
        builder
            .addCase(getUserData.pending, (state, action) => {
                state.isLoading = true
                console.log('action', action)

            })
            .addCase(getUserData.fulfilled, (state, action:IAction<IUserData>) => {
                state.isLoading = false
                state.userData = action.payload
                state.isAuth = true
            })
            .addCase(getUserData.rejected, (state, action) => {
                console.log(action)
                state.isLoading = false
                state.isError = true
            });
        builder
            .addCase(postSubcategories.pending, () => {
            })
            .addCase(postSubcategories.fulfilled, (state, action) => {
                state.subcategoriesList = action.payload
            })
            .addCase(postSubcategories.rejected, (state) => {
                state.isLoading = false
                state.isError = true
            });
        builder
            .addCase(getCategories.pending, () => {
            })
            .addCase(getCategories.fulfilled, (state, action) => {
                state.categories = action.payload
                state.isError = false
            })
            .addCase(getCategories.rejected, (state) => {
                state.isLoading = false
                state.isError = true
            });
        builder
            .addCase(getUpdatedToken.pending, () => {
            })
            .addCase(getUpdatedToken.fulfilled, (state, action) => {
                Cookies.set('accessToken', action.payload.access_token)
                Cookies.set('refreshToken', action.payload.refresh_token)
                state.isUpdateToken = false
            })
            .addCase(getUpdatedToken.rejected, (state) => {
                state.isLoading = false
                state.isError = true
            });
        builder
            .addCase(getPublications.pending, () => {
            })
            .addCase(getPublications.fulfilled, (state, action) => {
                state.publications = action.payload
                state.isLoading = false
            })
            .addCase(getPublications.rejected, (state) => {
                state.isLoading = false
                state.isError = true
            });
    }
})

export const {
    setRecoverPass,
    changeTypeAuth,
    changeCreatedAdRole,
    changeRole,
    createdAdStatus,
    setUserData,
    setPublications,
    setLogout
} = UserSlice.actions

export default UserSlice.reducer