import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link, withRouter } from "react-router-dom"; // router ile gelen özellikleri navi ye de kazandırmak için withRouter ullanıyoruz

const Navi = () => {
  // //HİGHER ORDER FUNCTİONS : içerisinde bir fonksiyon döndüren fonksiyonlara denir
  // //örnek

  // function toConsole(str1) {
  //   return function (str2) {
  //     console.log(str1 +" "+ str2);
  //   };
  // }
  // const selamla = toConsole("Merhaba");
  // selamla("Gülsen");
  //  //ya da
  // toConsole("Gülsen")("Keskin");
 
  

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <NavbarBrand href="/">Ülkeler</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to="/">Anasayfa</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/about">Hakkımızda</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/contact">İletişim</Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </nav>
    </div>
  );
};

export default withRouter(Navi);
