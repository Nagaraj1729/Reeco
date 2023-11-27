import styled from "styled-components"

export  const ReasonBtn = styled.button`
    border: 1px solid lightgray;
    background-color:${props=>props.isActive? 'black' : 'transparent'};
    border-radius: 20px;
    padding: 8px 12px;
    font-weight: 500;
    color: ${props=>props.isActive? '#fff' : 'gray'};
    font-size: 13px;
    cursor: pointer;
`

export const PopupContainer = styled.div`
background-color: #00000087;
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`
export const PopupCard = styled.div`
min-width: 300px;
max-width: 600px;
background-color: #fff;
position: relative;
border-radius: 13px;
padding: 35px;
`

export const CloseBtn = styled.button`
background-color: transparent;
height: 25px;
width: 25px;
border: none;
cursor: pointer;
position: absolute;
right: 15px;
top: 4px;
font-size: 35px;
font-weight: 500;
color: gray;
`
export const ItemName = styled.h2`
margin: 0px;
font-size: 20px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-weight: 500;
`
export const Brand = styled.p`
margin: 4px;
font-size: 17px;
color: rgb(104, 106, 106);
`
export const FormContainer = styled.div`
display: flex;
gap: 15px;
margin-top: 15px;
`
export const Form = styled.div``
export const InputContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;

`
export const Label = styled.div`
margin: 0px;
width: 200px;
font-weight: 500;
`
export const InputFeild = styled.input`
border: 1px solid lightgray;
border-radius: 4px;
padding: 5px;
width: 100px;
outline: none;
font-size: 14px;
color: #585555;
`

export const PlusButton = styled.button`
background-color: rgb(85, 218, 73);
align-items: center;
width: 25px;
height:25px;
border-radius: 50%;
border: none;
color: #fff;
font-weight: bold;
margin-left: 4px;
color: #000030;
cursor:pointer;
`
export const MinusButton = styled(PlusButton)`
    position: absolute;
    left: -32px;
    top: 2px;
`
export const Reasons = styled.div`
display: flex;
gap: 15px`

export const OptionalLabel = styled.span`
color: rgb(192, 188, 188);
font-weight: 400;
`
export const BtnsContainer = styled.div`
margin-top: 50px;
text-align: end;
padding-right: 20px;
`
