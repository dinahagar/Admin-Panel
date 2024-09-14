import { createSlice, PayloadAction } from "@reduxjs/toolkit";


// const initialState = {
//     items: []
// };

interface StringsState {
    items: string[];
  }
  
  const initialState: StringsState = {
    items: []
  };
  
  const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setApiItems: (state, action) => {
            state.items = action.payload;
        },
        addCategory: (state, action) => {
            state.items.unshift(action.payload as never);
        },
        deleteCategory: (state, action) => {
            state.items = state.items.filter(item => item !== action.payload)
        },
        editCategory: (state, action: PayloadAction<{ index: number; item: string }>) => {
            const { index, item } = action.payload;            
            if (index >= 0 && index < state.items.length) {
                state.items[index] = item;
            }
        }
    },
  });
  
  export const { setApiItems, addCategory, deleteCategory, editCategory } = categoriesSlice.actions;
  export default categoriesSlice.reducer;