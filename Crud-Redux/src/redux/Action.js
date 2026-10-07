export function addProduct(product){
    return{
        type : "ADD_PRODUCT",
        payload : product
    }
}
export function editProduct(_){
    return{
        type : "EDIT_PRODUCT",
        payload :_
    }
}
export function deleteProduct(id){
    return{
        type : "DELETE_PRODUCT",
        payload : id
    }
}