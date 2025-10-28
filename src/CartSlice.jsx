import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
	name: "cart",
	initialState: {
		items: [], // Initialize items as an empty array
	},
	reducers: {
		addItem: (state, action) => {
			const { name, image, cost } = action.payload;
			const itemExist = state.items.findIndex(
				(item) => item.name === name
			);

			if (itemExist !== -1) {
				state.items[itemExist].quantity++;
			} else {
				state.items.push({ name, image, cost, quantity: 1 });
			}
		},
		removeItem: (state, action) => {
			state.items = state.items.filter(
				(item) => item.name !== action.payload
			);
		},
		updateQuantity: (state, action) => {
			const { name, quantity } = action.payload;

			const itemExist = state.items.findIndex(
				(item) => item.name === name
			);

			if (itemExist) {
				state.items[itemExist].quantity = quantity;
			}
		},
	},
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
