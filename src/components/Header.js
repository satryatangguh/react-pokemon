import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Container } from 'react-bootstrap';
import Logo from "../assets/pokemonheader.png";

const Header = () => {
    return (
            <Navbar className='bg-dark text-white' expand="lg" sticky='top' collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>
                            <img
                                src={Logo}
                                className="d-inline-block"
                                height='50'
                                alt="Pokemon Logo"
                            />
                        </Navbar.Brand>
                    </LinkContainer>
                </Container>
            </Navbar>
    )
}

export default Header;