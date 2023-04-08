import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionTypes/actionTypes";

const initialState = {
    cart: [],
};

const productReducer = (state = initialState, action) => {
    // console.log(action.payload);
    const selectedProduct = state.cart.find(product => product._id === action.payload._id)
    console.log(selectedProduct);
    switch (action.type) {
        case ADD_TO_CART:
            if (selectedProduct) {
                return {
                    ...state,
                    cart: state.cart.map(product => product._id === action.payload._id ? { ...product, quantity: product.quantity + 1 } : product)
                }
            }
            return {
                ...state,
                cart: [...state.cart, { ...action.payload, quantity: 1 }]
            }
        case REMOVE_FROM_CART:
            if (selectedProduct.quantity > 1) {
                return {
                    ...state,
                    cart: state.cart.map(product => product._id === action.payload._id ? {...product, quantity: product.quantity - 1}: product)
                }
            }
            return {
                ...state,
                cart: state.cart.filter(product => product._id !== action.payload._id)
            }
        default:
            return state;
    }

}

export default productReducer;