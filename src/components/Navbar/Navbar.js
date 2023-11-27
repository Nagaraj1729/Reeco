import { NavBg,NavContainer,NavList, NavItem,  Logo,CartContainer, Cart, Badge, Arrow } from './styledComponents'

const Navbar = () => {
  return (
    <NavBg>
        <NavContainer>
            <NavList>
                <Logo>Reeco</Logo>
                <NavItem>Store</NavItem>
                <NavItem>Orders</NavItem>
                <NavItem>Analytics</NavItem>
            </NavList>
            <NavList>
                <CartContainer>
                <Badge>12</Badge>
                <Cart/>
                </CartContainer>
                <NavItem>Hello, James <Arrow/> </NavItem>
            </NavList>
        </NavContainer>
    </NavBg>
  )
}

export default Navbar