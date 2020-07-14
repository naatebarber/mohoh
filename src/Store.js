export const state = {
    cart: [
        {
            price: 20.99,
            title: "Banana Banana Banana Banana Banana Banana Banana",
            image: "https://images.ctfassets.net/ndcvlnh97o15/5tncJ4CFlg9PaCzUQNecIh/67212a567480fccede67582e4b46a118/bananapeel.jpg"
        },
        {
            price: 20.99,
            title: "Banana Banana Banana Banana Banana Banana Banana",
            image: "https://images.ctfassets.net/ndcvlnh97o15/5tncJ4CFlg9PaCzUQNecIh/67212a567480fccede67582e4b46a118/bananapeel.jpg"
        }
    ]
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