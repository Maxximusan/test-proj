import { CardItem } from "../CardItem/CardItem";
import users from "../../users.json";
import { List } from "./cardList.styled";

export const CardList = () => {
  console.log(users.length);
  return (
    <List>
      {users.map((user) => (
        <CardItem key={user.id} card={user} />
      ))}
    </List>
  );
};
