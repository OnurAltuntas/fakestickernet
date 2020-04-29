import {combineReducers} from "redux"
import addtoCartReducer from "./addtoCartReducer"
import changeCategoryReducer from "./changeCategoryReducer"
import categoryListReducer from "./categoryListReducer"
import productListReducer from "./productListReducer"



const rootReducer = combineReducers({
    addtoCartReducer,
    categoryListReducer,
    changeCategoryReducer,
    productListReducer
})

export default rootReducer;