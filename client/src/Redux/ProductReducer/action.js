import axios from "axios"
import { GET_PRODUCT_SUCCESS, PATCH_PRODUCT_SUCCESS, PRODUCT_FALIURE, PRODUCT_REQUEST } from "../actionTypes"

export const getProduct = () =>(dispatch)=>{
    dispatch({type : PRODUCT_REQUEST})
    axios.get(`https://reeco-mock-server.onrender.com/products`)
    .then((res)=> {
       dispatch({type : GET_PRODUCT_SUCCESS, payload: res.data})
    })
    .catch((error)=>{
       dispatch({type : PRODUCT_FALIURE})
    })
 }

 
export const updateProduct = (newData,id) => (dispatch)=>{
   dispatch({type : PRODUCT_REQUEST})
   axios.patch(`https://reeco-mock-server.onrender.com/products/${id}`, newData)
     .then((res)=>{
      dispatch({type: PATCH_PRODUCT_SUCCESS});
      dispatch(getProduct())
     })
     .catch((error)=>{
      dispatch({type : PRODUCT_FALIURE})
     })
}