const initialState = {
    medicines: [],
    medicine: undefined,
    newMedicine: undefined
}
export default function MedicineReducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_ALL_MEDICINES_SUCCESS':
            return {
                ...state,
                medicines: action.medicines
            };
        case 'FETCH_MEDICINE_BY_ID_SUCCESS':
            return {
                ...state,
                medicine: action.payload
            };
        case 'CREATE_MEDICINE_SUCCESS':
            return {
                ...state,
                newMedicine: action.payload
            };
        default:
            return state;
    }
}