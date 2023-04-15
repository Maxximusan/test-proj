import { useState } from "react";
import { CardItem } from "../CardItem/CardItem";
import users from "../../users.json";
import { List } from "./cardList.styled";
import { LoadMoreBtn } from "../LoadMoreBtn/LoadMoreBtn";

export const CardList = () => {
  console.log(users.length);
  const [needQuantityForPage, setNeedQuantityForPage] = useState(4);

  const sliceUsers = users.slice(0, needQuantityForPage);

  const loadMore = () => {
    setNeedQuantityForPage((prevState) => prevState + needQuantityForPage);
  };
  return (
    <section>
      <List>
        {sliceUsers.map((user) => (
          <CardItem key={user.id} card={user} />
        ))}
      </List>

      <LoadMoreBtn loadMore={loadMore} />
    </section>
  );
};
