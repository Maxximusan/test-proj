import { CardItem } from "../CardItem/CardItem";

import { List } from "./cardList.styled";

export const CardList = (props) => {
  const { users } = props;

  return (
    <section>
      <List>
        {users.map((user) => (
          <CardItem key={user.id} card={user} />
        ))}
      </List>
    </section>
  );
};
