export const state = {
    cart: [],
    showCart: false
}

export const reducer = (state = state, action) => {
    switch(action.type) {
        case "CONTENT":
            console.log(action.data.items)
            return Object.assign({}, state, {
                content: action.data.items
            })
        case "UPDATE_CART":
            console.log(action.data)
            return Object.assign({}, state, {
                cart: action.data
            })
        default: return state
    }
}