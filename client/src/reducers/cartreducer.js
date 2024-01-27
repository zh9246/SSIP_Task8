export const cartreducer =(state={cartitems:[]},action) =>{
    switch(action.type){
        case 'ADD_TO_CART':
            return {
                ...state,
                cartitems: [...state.cartitems,action.payload]
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cartitems: state.cartitems.filter(c=>c.id!==action.payload.id)
            }
        case 'CLEAR_CART':
            return {
                ...state,
                cartitems: []
            }
        default:
            return state
    }
}