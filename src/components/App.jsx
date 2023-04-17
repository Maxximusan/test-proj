import { useState, useEffect } from "react";
import * as SC from "./App.styled";
import { CardList } from "./CardList/CardList";
// import users from "../users.json";
import { LoadMoreBtn } from "./LoadMoreBtn/LoadMoreBtn";
import * as MockApi from "../Api/mockapiBackend";

export const App = () => {
  // console.log(users.length);

  const [ussers, setUssers] = useState([]);

  const [needQuantityForPage, setNeedQuantityForPage] = useState(8);

  // const sliceUsers = users.slice(0, needQuantityForPage);

  // const loadMore = () => {
  //   setNeedQuantityForPage((prevState) => prevState + needQuantityForPage);
  // };

  useEffect(() => {
    async function usersFetch() {
      try {
        const userss = await MockApi.fetchUsers();
        console.log(userss);
        setUssers(userss);
      } catch (error) {
        console.log(error);
      }
    }
    usersFetch();
  }, []);

  const sliceUsers = ussers.slice(0, needQuantityForPage);
  console.log(sliceUsers);
  console.log(ussers);

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
