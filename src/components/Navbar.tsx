import { Button, Container, Nav, Navbar as NavbarBs} from "react-bootstrap"
import { NavLink } from "react-router-dom"
import './font.css'
import {NavDropdown } from 'react-bootstrap';
import {Offcanvas } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

export function Navbar() {

  const [show, setShow] = React.useState(false);

  const handleToggle = () => setShow(!show);

    return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">

        <Container>
        <h3 className="navbar" style={{color : "black"}}>탑앤티비</h3>
            <Nav style={{float : 'left'}}>
                <Nav.Link to="/" as={NavLink}>home</Nav.Link>
                <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
                <Nav.Link to="/store" as={NavLink}>설치종류</Nav.Link>
                <NavDropdown title="설치종류" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">벽걸이티비설치</NavDropdown.Item>
                <NavDropdown.Item href="#">무타공 티비설치</NavDropdown.Item>
                <NavDropdown.Item href="#">천정형 티비설치</NavDropdown.Item>
                <NavDropdown.Item href="#">티비이전 설치</NavDropdown.Item>
                <NavDropdown.Item href="#">LED시계 설치</NavDropdown.Item>
            </NavDropdown>
            <Button variant="" onClick={handleToggle}>
                메뉴
            </Button>

            {/* Offcanvas */}
            <Offcanvas show={show} onHide={() => setShow(false)} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas right</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <NavDropdown.Item href="/about">벽걸이티비설치</NavDropdown.Item>
                <NavDropdown.Item href="#">무타공 티비설치</NavDropdown.Item>
                <NavDropdown.Item href="#">천정형 티비설치</NavDropdown.Item>
                <NavDropdown.Item href="#">티비이전 설치</NavDropdown.Item>
                <NavDropdown.Item href="#">LED시계 설치</NavDropdown.Item>
                </Offcanvas.Body>
            </Offcanvas>
            </Nav>

        </Container>
    </NavbarBs>
    )
}