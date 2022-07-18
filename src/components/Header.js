import React,{useState} from 'react'
import { Navbar,Container,Badge } from 'react-bootstrap'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import Menu from "@mui/material/Menu";
import { IoMdCart } from "react-icons/io";
import { GrFormClose } from "react-icons/gr";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Header = () => {


  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        Shopping
      </Navbar.Brand>
    </Container>
    <Container style={{width:"2rem"}}>
    <IoMdCart color="white" fontSize="25px" cursor="pointer" id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}/>
          <Badge>
            {2}
          </Badge>
    </Container>
    <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          >
          <div className="card_details d-flex justify-content-center align-items-center">
          <GrFormClose
            onClick={handleClose}
            style={{
              position: "absolute",
              top: 2,
              right: 2,
              ontSize: 23,
              cursor: "pointer",
            }}
          />
          <p>Your Cart is Empty!</p>
        </div>
        </Menu>
  </Navbar>
  </>
  )
}

export default Header