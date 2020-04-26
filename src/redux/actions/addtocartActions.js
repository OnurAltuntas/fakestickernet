import  * as actionTypes from "./actionTypes"

export function addtoCart(productId){
        return {type:actionTypes.ADD_TO_CART,payload:productId}
}