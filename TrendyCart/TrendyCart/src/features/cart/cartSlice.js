import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  selectedItems: 0,
  totalPrice: 0,
  tax: 0,
  taxRate: 0.05,
  grandTotal: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.products.find((item) => item._id === product._id);

      if (existingProduct) {
        // If the product already exists in the cart, increment its quantity
        existingProduct.quantity += 1;
      } else {
        // If the product is not in the cart, add it with an initial quantity of 1
        state.products.push({ ...product, quantity: 1 });
        alert('Item added to cart');
      }

          // Update totals after adding an item
          state.selectedItems = setSelectedItems(state);
          state.totalPrice = setTotalPrice(state);
          state.tax = setTax(state);
          state.grandTotal = setGrandTotal(state);
      

    },
    incrementQuantity: (state, action) => {
      const product = state.products.find((product) => product._id === action.payload);
      if (product ) {
        product.quantity += 1;
      }
      // Recalculate totals
      state.selectedItems = setSelectedItems(state);
      state.totalPrice = setTotalPrice(state);
      state.tax = setTax(state);
      state.grandTotal = setGrandTotal(state);
    },
    clearCart: (state) => {
      state.products = [];
      state.selectedItems = 0;
      state.totalPrice = 0;
      state.tax = 0;
      state.grandTotal = 0;
    },
    decrementQuantity: (state, action) => {
      const product = state.products.find((product) => product._id === action.payload);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
       // Recalculate totals
       state.selectedItems = setSelectedItems(state);
       state.totalPrice = setTotalPrice(state);
       state.tax = setTax(state);
       state.grandTotal = setGrandTotal(state);
    },
    removeFromCart: (state, action) => {
      // Filter out the product with the given ID
      state.products = state.products.filter((product) => product._id !== action.payload);
      state.selectedItems = setSelectedItems(state);
      state.totalPrice = setTotalPrice(state);
      state.tax = setTax(state);
      state.grandTotal = setGrandTotal(state); 
    },
  },
});
export const setSelectedItems = (state) => 
  state.products.reduce((total, product)  =>{
    return Number (total + product.quantity);
  },0 );
  


export const setTotalPrice = (state) => 
  state.products.reduce((total, product)  =>{
    return Number (total + product.quantity*product.price);
  },0 );
export const setTax = (state) => Number(setTotalPrice(state) * state.taxRate);

export const setGrandTotal = (state) => {
  return setTotalPrice(state) + setTax(state);
}

export const { clearCart, addToCart, incrementQuantity, decrementQuantity, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;