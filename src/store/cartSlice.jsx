import { createSlice } from "@reduxjs/toolkit";

// Load cart from localStorage if available
const loadCart = () => {
    try {
        const data = localStorage.getItem("cart");
        return data ? JSON.parse(data) : [];
    } catch {
        return [];
    }
};

const saveCart = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
};

const cartSlice = createSlice({
    name: "cart",
    initialState: loadCart(),
    reducers: {
        addToCart: (state, action) => {
            const exists = state.find(item => item.id === action.payload.id);
            if (!exists) {
                state.push(action.payload);
                saveCart(state);
            }
            // Optionally, you can show a message if already exists (handle in UI)
        },
        removeFromCart: (state, action) => {
            const updated = state.filter((item) => item.id !== action.payload);
            saveCart(updated);
            return updated;
        },

        clearCart: () => {
            saveCart([]);
            return [];
        },
        incrementQuantity: (state, action) => {
            const item = state.find(item => item.id === action.payload);
            if (item) {
                item.quantity = (item.quantity || 1) + 1;
                saveCart(state);
            }
        },
        decrementQuantity: (state, action) => {
            const item = state.find(item => item.id === action.payload);
            if (item) {
                if (item.quantity > 1) {
                    // Decrease quantity if more than 1
                    
                    item.quantity -= 1;

                } else {
                    return state.filter(item => item.id !== action.payload);
                }
                saveCart(state);
            }
        },
        
    }
});

export const { addToCart, removeFromCart, clearCart , incrementQuantity,decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;