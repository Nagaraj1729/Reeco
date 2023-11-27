import { useDispatch } from 'react-redux'
import { missingProduct } from '../../redux/reducers/productSlice'
import { BtnsContainer, CloseBtn, PopupCard, PopupContainer } from '../EditProductPopup/styledComponents'
import { ConfirmBtn } from './styledComponents'

const RemoveProductPopup = ({product,close}) => {
  const dispatch = useDispatch()

  const onClickYesOrNo = (updatedStatus)=> {
    dispatch(missingProduct({selectedId:product.id, updatedStatus}))
    close()

  }
  return (
        <PopupContainer>
            <PopupCard>
                <CloseBtn onClick={()=> close()}>&times;</CloseBtn>
                <h2 style={{margin:'0px'}}>Missing Product</h2>
                  <p>Is  '{product.name.slice(0,30)}...' urgent?</p>
                  <BtnsContainer>
                      <ConfirmBtn onClick={()=> onClickYesOrNo("Missing")}>No</ConfirmBtn>
                      <ConfirmBtn onClick={()=> onClickYesOrNo("Missing - Urgent")}>Yes</ConfirmBtn>
                  </BtnsContainer>
            </PopupCard>
        </PopupContainer>
        
  )
}

export default RemoveProductPopup