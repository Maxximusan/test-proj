// import { useState, useEffect } from "react";
import * as SC from "./App.styled";
import { CardList } from "./CardList/CardList";

export const App = () => {
  return (
    <SC.MainContainer>
      <CardList />
    </SC.MainContainer>
  );
};
