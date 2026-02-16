import { createSlice } from "@reduxjs/toolkit";

interface AuthType {
    isLogin: Boolean,
    user: Object,
    token: String
}

const initialState:AuthType = {
    isLogin: false,
    user: {},
    token: ""

}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, actions) => {
            state.user = actions.payload
        },
        setToken:(state,actions)=>{
            state.token = actions.payload
            state.isLogin = true
        },
        removeToken:(state)=>{
            state.token = " "
            state.isLogin = false
            state.user = {}
        }


    }
})

export const  {setToken,setUser,removeToken} = authSlice.actions;
export default authSlice.reducer