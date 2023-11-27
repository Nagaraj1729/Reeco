import styled from 'styled-components'
import { BsCart } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

export const NavBg = styled.div`
    background-color : rgb(68, 129, 75);
    color:#fff;
    position:sticky;
    top:0;
    height:65px;

`

export const NavContainer = styled.div`
    width: 85%;
    margin: auto;
    display: flex;
    justify-content: space-between;
`



export const NavList = styled.ul`
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 50px;
    padding-left: 0px;
    
`

export const NavItem = styled.li`
    color: #ffffffdd;
    cursor: pointer;
    outline: none;
    display:flex;
justify-content:center;
align-items:center;
    
`

export const Logo = styled(NavItem)`
color: #fff;
font-size: 26px;
font-family: 'Berkshire Swash', serif;
`

export const CartContainer = styled(NavItem)`
    position:relative;
    // background-color:yellow;
        // width:150px;
`
export const Cart = styled(BsCart)`
transform: rotateY(180deg);
font-size:22px;
`
export const Badge = styled.p`
height:15px;
width:15px;
border-radius:50%;
background-color: rgb(108, 253, 108);
color:#fff;
margin:0px;
font-size:8px;
display:flex;
justify-content:center;
align-items:center;
position:absolute;
z-index:1;
top:-6px;
left:-6px;

`

export const Arrow = styled(IoIosArrowDown)`
margin-top: 4px;
margin-left: 2px;
font-size:18px;
`