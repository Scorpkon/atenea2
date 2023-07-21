import { createSlice } from "@reduxjs/toolkit";
const celSlice= createSlice({
name:"cel",
initialState: {celebrities_List:[]},
reducers:{
    setCel: (state, action)=>{
        state.celebrities_List=[...state.celebrities_List, action.payload];
    },
    removeCel:(state, action)=>{
        const celId= action.payload;
        state.celebrities_List= state.celebrities_List.filter(cel=> cel.id !== action.payload);
    }
}

})

export const {setCel, removeCel} =celSlice.actions;

export default celSlice.reducer;