import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";
import { HiOutlinePrinter } from "react-icons/hi";

import { MdOutlineDone } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const getRequiredColor = status=> {
    switch (status) {
        case "Missing":
            return 'rgb(252, 98, 15)'
        case "Missing - Urgent":
            return 'red'
        case '':
            return null
        default:
            return 'rgb(100, 219, 100)';

}
}

export const Header = styled.header`
    box-shadow: 0px 4px 10px 0px #bfbfbf;


`
export const Content = styled.div`
width: 85%;
margin: auto;
padding: 5px;
`

export const PathContainer = styled.div`
display: flex;
gap: 10px;    
`
export const PathName = styled.p`
color: grey;
margin-top: 2px;
font-size: 14px;
`

export const OrderInfoContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
export const OrderId = styled.h3`
margin: 0px;
`
export const ButtonsContainer = styled.div`
display: flex;
align-items: center;
gap: 15px;
`
export const Button = styled.button`
    background-color: ${props=> props.outline? "transparent" : 'rgb(68, 129, 75)'};
    border: 2px solid rgb(68, 129, 75);
    padding: 8px 15px;
    color: ${props=> props.outline? 'rgb(68, 129, 75)' : '#fff'};
    border-radius: 20px;
    font-weight: bold;
    cursor: pointer;
    outline: none;
`

// BODY Below

export const Body = styled.div`
background-color: #bfbfbf48;
    flex-grow: 1;
`
export const OrderDetailsSection = styled.div`
    background-color: #fff;
    width: 85%;
    margin: auto;
    margin-top: 25px;
    margin-bottom: 25px;
    border: 2px solid lightgrey;
    border-radius: 12px;
    padding: 25px;
    display: flex;
`
export const DetailCard = styled.div`
    border-right: 1px solid lightgrey;
    padding: 5px 30px;
    width: 16.66%;
    border : ${props=> props.lastCard && 'none'}
`
export const DetailLabel = styled.p`
    color: grey;
    font-weight: 500;
    font-size: 13px;
    margin: 0px;
    margin-bottom: 10px;
`
export const DetailText = styled.p`
    font-weight: 500;
    margin: 0px;
`


export const ProdutsSection = styled(OrderDetailsSection)`
    display: flex;
    flex-direction: column;
    gap:12px;
`

export const ProductsSectionHeader = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
`
export const SearchBarContainer = styled.div`
border: 2px solid lightgray;
    padding: 5px 10px;
    border-radius: 20px;
    display: flex;
    align-items: center;
`
export const SearchFeild = styled.input`
padding: 5px;
font-weight: 500;
border: none;
outline: none;
font-size: 14px;
width: 350px;
`
export const SearchIcon = styled(IoIosSearch)`
    color : grey;
    font-size:23px;
    cursor : pointer;
`
export const PrintButton = styled(HiOutlinePrinter)`
    color : rgb(68, 129, 75);
    font-size:26px;
    cursor : pointer;
    margin-left:15px;
`






export const Table = styled.ul`
list-style-type: none;
    padding-left: 0px;

`
export const TableHeader = styled.li`
border: 2px solid lightgray;
    border-radius: 12px 12px 0px 0px;
    padding: 0px 15px;
    display: flex;
    
`
export const Column = styled.p`
color: rgba(117, 114, 114, 0.718);
    font-weight: 500;
    margin: 10px;
    width: ${props=> `${props.width}%`};
    
`
export const Row = styled.li`
display: flex;
    align-items: center;
    border-bottom: 3px solid rgb(191, 189, 189);
    gap: 12px;
    
`

export const RowData = styled.div`
width:10%;
`

export const Image = styled.img`
width: 50px;    
`
export const NameColumn = styled.div`
display: flex;
    align-items: center;
    padding-left: 10px;
    gap: 8px;
    width:30%;

`
export const StatusColumn = styled.div`
background-color: rgba(128, 128, 128, 0.132);
    display: flex;
    align-items: center;
    padding-right: 14px;
    align-self: stretch;
    width:30%;
`
export const BadgeContainer = styled.div`
    width:60%;
    display: flex;
    align-items: center;
    justify-content:center;
`

export const StatusBadge = styled.p`
    padding:8px 14px;
    border-radius:18px;
    display:flex;
    align-items:center;
    color: rgb(234, 238, 244);
   background-color: ${props=> getRequiredColor(props.status)};
   
`

export const CTAButtons = styled.div`
    width:40%;
    // background-color:yellow;
    display:flex;
    align-items:center;
`

export const CTAButton = styled.button`
background-color: transparent;
    border:none;
    color: grey;
    font-size: 16px;
    cursor: pointer;
    outline: none;
    width:33%;
`

export const Approve = styled(MdOutlineDone)`
${props=> {
    switch (props.status) {
        case 'Missing - Urgent':
            return 'color : grey'
        case 'Missing':
            return 'color : grey'
        case '':
            return 'color : grey'
        default:
            return 'color : rgb(100, 219, 100); font-size:28px;';
    }
}};
`
export const Remove = styled(IoMdClose)`
${props=> {
    switch (props.status) {
        case 'Missing - Urgent':
            return 'color : red; font-size:25px;'
        case 'Missing':
            return 'color:rgb(252, 98, 15); font-size:25px;'
        default:
            return 'grey';
    }
}};

`

