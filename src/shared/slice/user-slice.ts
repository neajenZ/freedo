import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {axiosInstance} from "src/shared/utils/axiosInstance.ts";
import {IUserAuth} from "src/app/types/user.ts";


export const postUserAuth = createAsyncThunk<any, IUserAuth>(
    `get-info/user`,
    async (data, {rejectWithValue}) => {
        try {
            const response = await axiosInstance.post('/auth/token', data, {
                headers: {
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin': '*'
                }
            })
            return response.data
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)

interface IInitialState {
    isLoading: boolean,
    isError: boolean,
    isRecoverPass: boolean,
    typeAuth: 'register' | 'login' | 'initial',
    role: 'customer' | 'executor'
}

type UserRole = 'customer' | 'executor'
interface IAction <T> {
    type: '',
    payload: T
}

const initialState:IInitialState = {
    isLoading: false,
    isError: false,
    isRecoverPass: false,
    typeAuth: "initial",
    role: 'customer'
}

const UserSlice = createSlice({
    name: 'user-slice',
    initialState,
    reducers: {
        setRecoverPass (state) {
            state.isRecoverPass = true
        },
        changeTypeAuth (state, action) {
            state.typeAuth = action.payload
        },
        changeRole (state, action:IAction<UserRole>) {
            state.role = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(postUserAuth.pending, state => {
            state.isLoading = true
        })
            .addCase(postUserAuth.fulfilled, (state, action) => {
                state.isLoading = false
                console.log(action.payload)
            })
            .addCase(postUserAuth.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
            });
    }
})

export const {setRecoverPass, changeTypeAuth, changeRole} = UserSlice.actions

export default UserSlice.reducer