export const initialState = {
    themeState: false,
}


export const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_THEME':
            return {
                ...state,
                themeState: action.value
            }

        default:
            return state;
    }
}

export default reducer;
