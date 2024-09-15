import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, productsState } from "../../Types/products";

const initialState: productsState = {
    items: [],
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setApiItems: (state, action) => {
            state.items = action.payload;
        },
        addNewProduct: (state, action) => {
            state.items.unshift(action.payload as never);
        },
        deleteProductItem: (state, action) => {
            state.items = state.items.filter((item: { id: string }) => item.id !== action.payload.id)
        },
        editProduct: (state, action: PayloadAction<{ index: number; updatedProduct: Product }>) => {
            const { index, updatedProduct } = action.payload;            
            if (index >= 0 && index < state.items.length) {
                state.items[index] = updatedProduct;
            }
        }
    },
});

export const { setApiItems, addNewProduct, deleteProductItem, editProduct } = productsSlice.actions;
export default productsSlice.reducer;