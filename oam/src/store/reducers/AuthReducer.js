const initialState = {
    currentUser: undefined,
    isAuthUser: undefined,
    isLoggedOut: false
}
 
export default function AuthReducer(state = initialState, action) {
 
    switch (action.type) {
 
        case 'LOGIN_SUCCESS':
            let loggedInUser = { name: action.payload.customerId, role: action.payload.role };
            localStorage.setItem("currentUser", JSON.stringify(loggedInUser));
            return {
                ...state,
                user: action.payload,
                isAuthUser: true
            };
        case 'LOGIN_FAILURE':
            localStorage.removeItem("currentUser");
            return {
                ...state,
                isAuthUser: false
            };
            case 'LOGOUT':
                localStorage.removeItem("currentUser");
                return {
                    ...state,
                    isLoggedOut: true,
                    currentUser: undefined,
                    isAuthUser: undefined
                };
 
        default:
            return state;
    }
}