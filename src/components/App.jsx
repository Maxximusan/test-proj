import { useState, useEffect } from "react";
import * as SC from "./App.styled";
import { CardList } from "./CardList/CardList";
import { LoadMoreBtn } from "./LoadMoreBtn/LoadMoreBtn";
import * as MockApi from "../Api/mockapiBackend";

export const App = () => {
  const [users, setUsers] = useState([]);
  const [needQuantityForPage, setNeedQuantityForPage] = useState(8);

  useEffect(() => {
    async function usersFetch() {
      try {
        const userss = await MockApi.fetchUsers();
        setUsers(userss);
      } catch (error) {
        console.log(error);
      }
    }
    usersFetch();
  }, []);

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
