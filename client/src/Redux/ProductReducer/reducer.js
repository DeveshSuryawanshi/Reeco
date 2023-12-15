import { GET_PRODUCT_SUCCESS, PATCH_PRODUCT_SUCCESS, PRODUCT_FALIURE, PRODUCT_REQUEST } from "../actionTypes";

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case PRODUCT_REQUEST:
            return {...state, isLoading: true}

        case PRODUCT_FALIURE:
            return {...state, isError: true}
            
        case GET_PRODUCT_SUCCESS:
            return {...state, isLoading: false, products: payload} 

        case PATCH_PRODUCT_SUCCESS:
            return {...state, isLoading: false}
    
        default:
            return state;
    }
};
