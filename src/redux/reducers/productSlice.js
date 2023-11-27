import { createSlice } from '@reduxjs/toolkit'
import productList from '../../products.json'

const initialState = {
    productList
    
}

const productSlice = createSlice({
    name : 'productReducer',
    initialState,
    reducers : {
        approveProduct : (state, action)=> {
            const product = state.productList[action.payload-1]
            const updatedProduct = {...product, status:'Approved'}
            state.productList[action.payload-1] = updatedProduct
        },

        missingProduct : (state, action)=> {
            const {selectedId, updatedStatus} = action.payload
            const product = state.productList[selectedId-1]
            const updatedProduct = {...product, status : updatedStatus}
            state.productList[selectedId-1] = updatedProduct
        },

        editProductDetails : (state,action)=> {
                console.log('---EDIT Triggered')
                const editedProduct = action.payload
                const index = editedProduct.id-1
                const selectedProduct = state.productList[index]
                const updatedProduct = {...selectedProduct, ...editedProduct}
                state.productList[index] = updatedProduct
        }
    }

})


export const {approveProduct,missingProduct,editProductDetails} = productSlice.actions
export default productSlice.reducer