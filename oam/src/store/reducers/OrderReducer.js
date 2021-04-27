const initialState = {
    orders:[],
    order:undefined
    
}
 
export default function OrderReducer(state = initialState, action) {
 
    switch (action.type) {
 
        case 'FETCH_ALL_ORDERS_SUCCESS':
            return {
                ...state,
               orders : action.orders
            };
        case 'FETCH_ORDER_BY_ID_SUCCESS':
             return {
                ...state,
                order: action.payload
            };
            case 'FETCH_ORDER_BY_CUSTOMER_ID_SUCCESS':
                return {
                    ...state,
                    orders: action.payload
                };
            default:
                return state;
     
        }
    }