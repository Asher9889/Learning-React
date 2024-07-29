import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState : {
        items: [],
    },
    reducers:{
        addItem : (state,action)=>{
            state.items.push(action.payload)
        },
        removeItem: (state, action)=>{
            state.items.pop();
        },
        removeAllItems: (state, action)=>{
            state.items.length = 0;
        }
    }
})

// exporting all the actions
export const {addItem, removeItem, removeAllItems} = cartSlice.actions;

// exporting cartSlice reducer object
export default cartSlice.reducer;



//  Now add this slice to Store;