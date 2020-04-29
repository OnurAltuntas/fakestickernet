import {combineReducers} from "redux"
import addtoCartReducer from "./addtoCartReducer"
import changeCategoryReducer from "./changeCategoryReducer"
import categoryListReducer from "./categoryListReducer"


const rootReducer = combineReducers({
    addtoCartReducer,
    categoryListReducer,
    changeCategoryReducer
})

export default rootReducer;