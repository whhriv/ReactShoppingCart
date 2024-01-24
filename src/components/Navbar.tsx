import { Button, Container, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';

export function Navbar() {
  const {openCart, cartQuantity } = useShoppingCart()
  return (
    <NavbarBs className="bgwhite shadow-sm mb-3">
      <Container>
        <Nav>
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/store">
            Store
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about">
            About
          </Nav.Link>
        </Nav>
        {/* {cartQuantity > 0 && (  */}
        <Button onClick={openCart}>
        Cart 
            <div 
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center" 
            style={{
                color: "white",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom:0,
                right:"60px",
                transform: "translate(+25%,+25%)",
            }}
            >{cartQuantity}
            </div>

        
        </Button>
        {/* )} */}
      </Container>
    </NavbarBs>
  );
}
