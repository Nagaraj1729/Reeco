import Popup from 'reactjs-popup';
import avocado from '../../assets/avocadoHass.jpg'


import { Button, ButtonsContainer, Content, Header, OrderId, OrderInfoContainer, PathContainer, PathName,
    Body,
    OrderDetailsSection,
    DetailCard,
    DetailLabel,
    DetailText,
    ProdutsSection,
    ProductsSectionHeader,
    SearchBarContainer,
    SearchFeild,
    SearchIcon,
    PrintButton,
    Table,
    TableHeader,
    Column,
    Row,
    Image,
    CTAButton,
    RowData,
    NameColumn,
    StatusColumn,
    BadgeContainer,
    StatusBadge,
    CTAButtons,
    Approve,
    Remove
} from './styledComponents'
import {useDispatch, useSelector } from 'react-redux'
import { approveProduct } from '../../redux/reducers/productSlice'
import EditProductPopup from '../EditProductPopup';
import RemoveProductPopup from '../RemoveProductPopup';
import { useState } from 'react';


const OrderViewPage = () => {
    const [searchValue, setSearchValue] = useState('')
    const productList = useSelector(state=> state.productReducer.productList)
    const dispatch = useDispatch()

    const filteredProducts = productList.filter(product=> product.name.toLowerCase().includes(searchValue.toLowerCase()))
    return (
    <>
    <Header>
        <Content>
        <PathContainer>
            <PathName>Orders</PathName>
            <PathName> &gt; Order 32457ABC</PathName>
        </PathContainer>
        <OrderInfoContainer>
            <OrderId>Order 32457ABC</OrderId>
            <ButtonsContainer>
                <Button outline>Back</Button>
                <Button>Approve order</Button>
            </ButtonsContainer>
        </OrderInfoContainer>
        </Content>
    </Header>
    <Body>
        <OrderDetailsSection>
            <DetailCard>
                <DetailLabel>Supplier</DetailLabel>
                <DetailText>East coast fruits & vegatables</DetailText>
            </DetailCard>
            <DetailCard>
                <DetailLabel>Shipping Date</DetailLabel>
                <DetailText>Thu, Feb 10</DetailText>
            </DetailCard>
            <DetailCard>
                <DetailLabel>Total</DetailLabel>
                <DetailText>$ 15,028.3</DetailText>
            </DetailCard>
            <DetailCard>
                <DetailLabel>Category</DetailLabel>
                <DetailText>East coast fruits & vegatables</DetailText>
            </DetailCard>
            <DetailCard>
                <DetailLabel>Department</DetailLabel>
                <DetailText>300-444-678</DetailText>
            </DetailCard>
            <DetailCard lastCard>
                <DetailLabel>Status</DetailLabel>
                <DetailText>Awaiting your Approvel</DetailText>
            </DetailCard>
        </OrderDetailsSection>

        <ProdutsSection>
            <ProductsSectionHeader>
                <SearchBarContainer>
                    <SearchFeild onChange={e=> setSearchValue(e.target.value)} value={searchValue}type="search" placeholder='Search...'/>
                    <SearchIcon/>
                </SearchBarContainer>
                <ButtonsContainer>
                <Button outline>Add Item</Button>
                    <PrintButton />
                </ButtonsContainer>
            </ProductsSectionHeader>

            <Table>
                <TableHeader>
                    <Column width={30}>Product name</Column>
                    <Column width={10}>Brand</Column>
                    <Column width={10}>Price</Column>
                    <Column width={10}>Quantity</Column>
                    <Column width={10}>Total</Column>
                    <Column width={30}>Status</Column>
                </TableHeader>
                {filteredProducts.map((product, index)=> 
                <Row key={index}>
                    <NameColumn>
                        <Image src={avocado} alt="product-img"/>
                        <p> {product.name} </p>
                    </NameColumn>
                        <RowData> {product.brand} </RowData>
                        <RowData>${product.price} / 6+1LB</RowData>
                        <RowData>{product.quantity} x 6 + 1LB </RowData>
                        <RowData>${parseFloat(product.price) * parseFloat(product.quantity)}</RowData>
                        <StatusColumn>
                            <BadgeContainer><StatusBadge status={product.status}>{product.status}</StatusBadge></BadgeContainer>
                            <CTAButtons>
                                <CTAButton onClick={()=> dispatch(approveProduct(product.id))}><Approve status={product.status}/></CTAButton>
                                <Popup trigger={<CTAButton><Remove status={product.status} /></CTAButton>} modal>{close=> (<RemoveProductPopup product={product} close={close}/>)}</Popup>
                                <Popup trigger={<CTAButton>Edit</CTAButton>} modal>
                                    {close=> (<EditProductPopup product={product} close={close}/>)}
                                </Popup>
                                
                            </CTAButtons>
                        </StatusColumn>
                </Row>
                 )}
            </Table>
        </ProdutsSection>

    </Body>
    </>
  )
}

export default OrderViewPage