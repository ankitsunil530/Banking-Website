import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';


const intialState = {
    user: user?user:null,
    loading: false,
    isError: null,
    isSuccess:false,
    message: null
}


const authSlice= createSlice({
    user,
    intialState,
    reducers:{
            
    },
    extraReducers:{()=>{
        builder.addCase(login.pending,(state,action)=>{
            state.loading=true;
            state.isError=null;
            state.isSuccess=false;
            state.message=null;
        }),
        builder.addCase(login.fulfilled,(state,action)=>{
            state.loading=false;
            state.isError=null;
            state.isSuccess=true;
            state.message=action.payload.message;
            state.user=action.payload.user;
        }),
    }
    }

})

export const {reset} =authSlice.actions;
export default authSlice.reducer;