import { GET_PRODUCTS, GET_PRODUCT_FAIL, GET_PRODUCT_SUCCESS } from "../const";

const intialState = {
    products : [],
    isLoading:null,
    error : null

}

const productReducer = (state=intialState,{type,payload}) => {
    switch (type) {
        case GET_PRODUCTS:
            return {...state,isLoading:true};
         
        case GET_PRODUCT_SUCCESS :
            return {...state,isLoading:false,products:payload}
        
        case GET_PRODUCT_FAIL :
            return {...state,isLoading:false,error:payload} 
    
        default:
            return state
    }
}
 
export default productReducer;