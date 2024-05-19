import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

export type CartItem = {
    id: string;
    title: string;
    price: number;
    quantity: number;
};

type CartState = {
    items: CartItem[];
};

const initialState: CartState = {
    items: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<{ id: string; title: string; price: number }>) {
            const existingItem = state.items.find((item) => item.id === action.payload.id);

            existingItem
                ? existingItem.quantity++
                : state.items.push({
                      id: action.payload.id,
                      title: action.payload.title,
                      price: action.payload.price,
                      quantity: 1,
                  });
        },
        removeItem(state, action: PayloadAction<string>) {
            const existingItem = state.items.find((item) => item.id === action.payload);

            existingItem && existingItem.quantity === 1
                ? state.items.filter((item) => item.id !== action.payload)
                : existingItem && existingItem.quantity--;
        },
    },
});

export const { addItem, removeItem } = cartSlice.actions;
