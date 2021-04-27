const initialState = {
    newUser:undefined
}
 
export default function UserReducer(state = initialState, action) {
    switch (action.type) {
        case 'CREATE_USER_SUCCESS':
            return {
                ...state,
                newUser: action.payload
            };
            default:
                return state;
     
        }
    }