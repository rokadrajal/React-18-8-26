const initialData = {
    products: [
        {
            id: 1,
            name: "Laptop",
            category: "Electronics",
            price: 55000,
            quantity: 10
        },
        {
            id: 2,
            name: "Mobile Phone",
            category: "Electronics",
            price: 25000,
            quantity: 15
        },
        {
            id: 3,
            name: "Headphones",
            category: "Accessories",
            price: 2000,
            quantity: 20
        },
        {
            id: 4,
            name: "Keyboard",
            category: "Accessories",
            price: 1500,
            quantity: 12
        },
        {
            id: 5,
            name: "Smart Watch",
            category: "Wearable",
            price: 5000,
            quantity: 8
        }
    ]
}

const reducer = (state = initialData, action) => {
    switch (action.type) {
        case "ADD_PRODUCT":
            return {
                ...state, products: [...state.products, action.payload]
            }
        case "EDIT_PRODUCT":
            return {
                ...state , products : state.products.map((element)=>{
                       return ((element.id == action.payload.id) ? action.payload : element)
                })
            }
        case "DELETE_PRODUCT":
            return {
                ...state , products : state.products.filter((element)=>{
                       return element.id != action.payload
                })
            }

        default:
            return{
                ...state
            }
    }
}

export default reducer;