import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    sessionTime : 25, 
    breakTime : 5, 
  },
};

export const timerSlice = createSlice({
  name: "timer",

  initialState,
  reducers: {
    increment: (state, action) => {
      if (action.payload === "break" && state.value.breakTime < 60){
        state.value.breakTime = state.value.breakTime + 1
      } else if(action.payload === "session" && state.value.sessionTime < 60){
        state.value.sessionTime  = state.value.sessionTime + 1
      }
    },
    decrement : (state, action)=>{
        if (action.payload === "break" && state.value.breakTime > 1){
            state.value.breakTime = state.value.breakTime - 1
          } else if(action.payload === "session" && state.value.sessionTime > 1){
            state.value.sessionTime  = state.value.sessionTime - 1
          }
    }, 
    reset : (state, action) => {
      state.value = {
        sessionTime : 25, 
        breakTime : 5, 
      }
    }
  },
});

export const { increment, decrement, reset} = timerSlice.actions;
export default timerSlice.reducer;
