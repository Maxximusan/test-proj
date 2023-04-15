import { useState } from "react";
import * as SC from "./App.styled";
import { CardList } from "./CardList/CardList";
import users from "../users.json";
import { LoadMoreBtn } from "./LoadMoreBtn/LoadMoreBtn";

export const App = () => {
  console.log(users.length);
  const [needQuantityForPage, setNeedQuantityForPage] = useState(4);

  const sliceUsers = users.slice(0, needQuantityForPage);

  const loadMore = () => {
    setNeedQuantityForPage((prevState) => prevState + needQuantityForPage);
  };
  return (
    <SC.MainContainer>
      <CardList users={sliceUsers} />
      <LoadMoreBtn loadMore={loadMore} />
    </SC.MainContainer>
  );
};
