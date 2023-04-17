import { useState, useEffect } from "react";
import * as SC from "../UsersPage/Users.styled";
import { CardList } from "../../components/CardList/CardList";
import { LoadMoreBtn } from "../../components/LoadMoreBtn/LoadMoreBtn";
import * as MockApi from "../../Api/mockapiBackend";
import { BackBtn } from "../../components/BackBtn/BackBtn";

const UsersPage = () => {
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
    setNeedQuantityForPage((prevState) => prevState + 8);
    console.log(needQuantityForPage);
  };

  return (
    <SC.MainContainer>
      <BackBtn />
      <CardList users={sliceUsers} />

      <LoadMoreBtn loadMore={loadMore} />
    </SC.MainContainer>
  );
};

export default UsersPage;
