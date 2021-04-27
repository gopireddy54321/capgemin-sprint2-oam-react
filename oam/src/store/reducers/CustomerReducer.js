const initialState = {
    customers: [],
    customer:undefined,
    newCustomer:undefined,
    medicines:[],
}
 
export default function CustomerReducer(state = initialState, action) {
 
    switch (action.type) {
 
        case 'FETCH_ALL_CUSTOMERS_SUCCESS':
            return {
                ...state,
               customers : action.customers
            };
        case 'FETCH_CUSTOMER_BY_ID_SUCCESS':
            return {
                ...state,
                customer: action.payload
            };
        case 'CREATE_CUSTOMER_SUCCESS':
            return {
                ...state,
                newCustomer: action.payload
            };
            case 'UPDATE_CUSTOMER_SUCCESS':
                return {
                    ...state,
                    isUpdated: true
                };
        case 'DELETE_CUSTOMER_SUCCESS':
            return{
                ...state,
                customer:action.payload
            };
        case 'UPDATE_CUSTOMER_SUCCESS':
            return{
                ...state,
                customers: action.payload
            };
       
        default:
            return state;
 
    }
}