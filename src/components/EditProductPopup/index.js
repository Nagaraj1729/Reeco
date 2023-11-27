import avacadoImg from '../../assets/avocadoHass.jpg'
import { useState } from 'react'
import { Brand, CloseBtn, FormContainer, InputContainer, BtnsContainer,InputFeild, ItemName, Label, MinusButton, OptionalLabel, PlusButton, PopupCard, PopupContainer, ReasonBtn, Reasons } from './styledComponents'
import { Button } from '../OrderViewPage/styledComponents'
import { useDispatch } from 'react-redux'
import { editProductDetails } from '../../redux/reducers/productSlice'

const EditProductPopup = ({product,close}) => {
  const {name, brand} = product
  const [reason, setReason] = useState('')
  const [editedProduct, setEditedProduct] = useState({
    id : product.id,
    price : product.price,
    quantity : product.quantity
  })

  const dispatch = useDispatch()
  

  const onSubmitEditForm = e=> {
    e.preventDefault()
    dispatch(editProductDetails(editedProduct))
    close()
  }
  return (
        <PopupContainer>
            <PopupCard>
                <CloseBtn onClick={()=> close()}>&times;</CloseBtn>
                <ItemName>{name}</ItemName>
                <Brand>{brand}</Brand>
                <FormContainer>
                  <img style={{width:'150px'}} src={avacadoImg} alt="product-img"/>
                  <form onSubmit={onSubmitEditForm}>
                    <InputContainer>
                      <Label>Price ($)</Label>
                      <InputFeild onChange={e=> setEditedProduct({...editedProduct, price:e.target.value})} value={editedProduct.price}  min={0} className='input-filed' type="number"/> <span> &nbsp;&nbsp;/ 6 * 1LB</span>
                    </InputContainer>
                    <InputContainer>
                      <Label>Quantity</Label>
                      <div style={{position:'relative'}}>
                        <MinusButton type="button" disabled={editedProduct.quantity===0} onClick={()=> setEditedProduct({...editedProduct, quantity : editedProduct.quantity-1})}>-</MinusButton>
                        <InputFeild onChange={e=> setEditedProduct({...editedProduct, quantity:e.target.value})} value={editedProduct.quantity}  min={0} className='input-filed' type="number"/>
                        <PlusButton type="button" onClick={()=> setEditedProduct({...editedProduct, quantity : editedProduct.quantity+1})}>+</PlusButton>
                      </div>
                       <span> &nbsp;&nbsp; x 6 * 1LB</span>
                    </InputContainer>
                    <InputContainer>
                      <Label>Total</Label> <span style={{fontWeight:500}}> ${editedProduct.price * editedProduct.quantity}</span>
                      
                    </InputContainer>
                  </form>
                </FormContainer>
                <p style={{fontWeight:500}}>Choose reason <OptionalLabel>(optional)</OptionalLabel></p>
                <Reasons>
                  <ReasonBtn isActive={reason==='Missing product'} onClick={()=> setReason('Missing product')}>Missing product</ReasonBtn>
                  <ReasonBtn isActive={reason==='Quantity is not the same'} onClick={()=> setReason('Quantity is not the same')} >Quantity is not the same</ReasonBtn>
                  <ReasonBtn isActive={reason==='Price is not the same'} onClick={()=> setReason('Price is not the same')}>Price is not the same</ReasonBtn>
                  <ReasonBtn isActive={reason==='Other'} onClick={()=> setReason('Other')}>Other</ReasonBtn>
                </Reasons>

                <BtnsContainer>
                    <Button onClick={()=> close()} outline>Cancel</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button onClick={onSubmitEditForm}>Send</Button>
                </BtnsContainer>
                

            </PopupCard>
        </PopupContainer>
        
  )
}

export default EditProductPopup