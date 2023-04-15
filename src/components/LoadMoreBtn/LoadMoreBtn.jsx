import { Button } from "./LoadMoreBtn.styled";

export const LoadMoreBtn = (props) => {
  const { loadMore } = props;
  return (
    <Button onClick={loadMore} type="button">
      Load More
    </Button>
  );
};
