import React from "react";
import HeaderNavigation from "../HeaderNavigation";
import { Title } from "./styles";
import { AppBar, Toolbar } from "@material-ui/core";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Title variant="h6">Car rental service</Title>
        <HeaderNavigation />
      </Toolbar>
    </AppBar>
  );
}
