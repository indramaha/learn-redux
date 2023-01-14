const numberState = {
    number: 20,
}

export const numberStateReducer = (state = numberState, action) => {
    switch (action.type) {
        case "TAMBAH":
            return {
                ...numberState,
                number: action.payload,
            }
        case "KURANG" :
            return {
                ...numberState,
                number: action.payload,
            }
        default:
            return state
    }
}