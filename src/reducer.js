export const initialState = {
    basket: [],
    user: null,
};
export const getBasketTotal = (basket) => {
    return basket?.reduce((amount, item) => item.price + amount, 0);
}

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'ADD_TO_BASKET':
            // Logic of adding things to basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'REMOVE_FROM_BASKET':
            // Logic of removing things from basket
            // we clone the basket
            let newBasket = [...state.basket];

            // check to see if item exist in basket and remove it
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            if (index >= 0) {
                newBasket.splice(index, 1);

            } else {
                console.warn(
                    `Can remove the product (id:${action.id}) as its not available`
                )
            }
            return { ...state, basket: newBasket, }
        default:
            return state;
    }
}

export default reducer;