import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const NavBarComponent = () => {
    const cartProducts = useSelector((state) => state.cart);

    return (
        <div style={{ marginBottom: "20px" }}>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand to="/dashboard" as={Link}>Redux Toolkit</Navbar.Brand>
                    <Nav>
                        <Nav.Link to="/dashboard" as={Link}>Products</Nav.Link>
                    </Nav>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <Nav.Link to="/cart" as={Link}>Cart : {cartProducts.length}</Nav.Link>
                        </Navbar.Text>
                    </Navbar.Collapse>

                </Container>
            </Navbar>

        </div >
    )
};

export default NavBarComponent;
