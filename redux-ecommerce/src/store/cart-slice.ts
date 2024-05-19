import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

type CartItem = {
    id: string;
    tite: string;
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
            existingItem ? existingItem.quantity++ : [...state.items, { ...action.payload, quantity: 1 }];
        },
        removeItem(state, action: PayloadAction<string>) {
            const existingItem = state.items.find((item) => item.id === action.payload);

            existingItem && existingItem.quantity === 1
                ? state.items.filter((item) => item.id !== action.payload)
                : existingItem && existingItem.quantity--;
        },
    },
});
