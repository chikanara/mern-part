import axios from "axios";
import { DELETE_PRODUCTS, DELETE_PRODUCT_FAIL, DELETE_PRODUCT_SUCCESS, EDIT_PRODUCT, EDIT_PRODUCT_FAIL, GET_PRODUCTS, GET_PRODUCT_FAIL, GET_PRODUCT_SUCCESS } from "../const";

export const getProducts = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS });
  try {
    const { data } = await axios.get("/api/products");
    dispatch({ type: GET_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_PRODUCT_FAIL, payload: error });
  }
};

export const deleteProduct = (id) => async (dispatch) => {
    dispatch({ type: DELETE_PRODUCTS });
    try {
      const { data } = await axios.delete("/api/delete/"+ id);
    //   dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: data });
    dispatch(getProducts())
    } catch (error) {
      dispatch({ type: DELETE_PRODUCT_FAIL, payload: error });
    }
  };

  export const addProduct = (product) => async (dispatch) => {
    dispatch({ type: DELETE_PRODUCTS });
    try {
      const { data } = await axios.post("/api/add/", product);
    //   dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: data });
    dispatch(getProducts())
    } catch (error) {
      dispatch({ type: DELETE_PRODUCT_FAIL, payload: error });
    }
  };

  export const editProduct = (id,product) => async (dispatch) => {
    dispatch({ type: EDIT_PRODUCT });
    try {
      const { data } = await axios.put("/api/edit/"+id, product);
      console.log(data)
    //   dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: data });
    dispatch(getProducts())
    } catch (error) {
      dispatch({ type: EDIT_PRODUCT_FAIL, payload: error });
    }
  };



