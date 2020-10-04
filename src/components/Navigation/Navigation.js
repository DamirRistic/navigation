import React, { useState } from "react";

import { Container } from "../../theme/GlobalStyles";
import {
  NavigationContainerCover,
  Cover,
  TitleBar,
  Hamburger,
  NavigationContainerMenu,
  Menu,
  MenuHeader,
  MenuList,
  MenuListItem,
} from "./Navigation.elements";

const Navigation = () => {
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(true);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <Container>
      <NavigationContainerCover open={open}>
        <Cover>
          <TitleBar>
            <Hamburger onClick={openMenu}>
              <span></span>
              <span></span>
              <span></span>
            </Hamburger>
            <h1>START</h1>
          </TitleBar>
        </Cover>
      </NavigationContainerCover>
      <NavigationContainerMenu open={open}>
        <Menu>
          <MenuHeader>Viktor</MenuHeader>
          <MenuList>
            <MenuListItem className="active" onClick={closeMenu}>
              Start
            </MenuListItem>
            <MenuListItem>Your Cart</MenuListItem>
            <MenuListItem>Favourites</MenuListItem>
            <MenuListItem>Your Orders</MenuListItem>
            <MenuListItem></MenuListItem>
            <MenuListItem>Sign Out</MenuListItem>
          </MenuList>
        </Menu>
      </NavigationContainerMenu>
    </Container>
  );
};

export default Navigation;
