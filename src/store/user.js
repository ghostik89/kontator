import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


export const authorize = createAsyncThunk(
    'user/auth',
    async (credentials, {rejectWithValue}) => {
        try{
            const req = await axios.get('users/login', {
                baseURL: 'https://www.visdom.tech/kontactor-dev-0.1/',
                auth: {
                    username: credentials.email,
                    password: credentials.password
                },
            })
            return {
                user: req,
                email: credentials.email,
                password: credentials.password
            }
        }catch (e) {
            console.log(e)
            return rejectWithValue({
                message: e.message
            })
        }
    }
)

const initialState = {
    user: null,
    email: null,
    password: null,
    loading: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder => {
        builder.addCase(authorize.fulfilled, (state, action) => {
            state.user = action.payload.user
            state.email = action.payload.email
            state.password = action.payload.password
            state.loading = false
        })
        builder.addCase(authorize.rejected, (state) => {
            state.user = null
            state.email = null
            state.password = null
            state.loading = false
        })
        builder.addCase(authorize.pending, state => {
            state.loading = false
        })
    },
    reducers: {
        logout: (state) => {
            state.user = initialState.user;
            state.email = initialState.email
            state.password = initialState.password
        }
    }
})

export const { logout } = userSlice.actions;
export default userSlice.reducer;
