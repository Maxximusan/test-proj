import { useState, useEffect } from "react";

import * as SC from "./CardItem.styled";

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export const CardItem = (props) => {
  const { card } = props;

  const [followers, setFollowers] = useLocalStorage(
    "followers" + card.id,
    card.followers
  );

  const [noClick, setNoClick] = useLocalStorage("btn" + card.id, false);

  // const [followers, setFollowers] = useState(
  //   JSON.parse(window.localStorage.getItem("followers" + card.id)) ??
  //     card.followers
  // );

  // const [noClick, setNoClick] = useState(
  //   JSON.parse(window.localStorage.getItem("btn" + card.id)) ?? false
  // );

  const onClickStartBtn = (event) => {
    setFollowers((prev) => prev + 1);
    setNoClick(true);
    event.preventDefault();
  };

  const onClickAfterPushStartBtn = (event) => {
    event.preventDefault();
    setFollowers((prev) => prev - 1);
    setNoClick(false);
  };

  // useEffect(() => {
  //   window.localStorage.setItem(
  //     "followers" + card.id,
  //     JSON.stringify(followers)
  //   );
  // }, [followers, card.id]);

  // useEffect(() => {
  //   window.localStorage.setItem("btn" + card.id, JSON.stringify(noClick));
  // }, [noClick, card.id]);

  return (
    <SC.CardContainer key={card.id}>
      <SC.Logo></SC.Logo>
      <SC.PictureSection></SC.PictureSection>
      <SC.DividingStrip></SC.DividingStrip>

      <SC.AvatarWindow>
        <SC.Avatar src={card.avatar} alt="фото" />
      </SC.AvatarWindow>

      <SC.TweewsQuantity>{card.tweets} Tweets</SC.TweewsQuantity>
      <SC.FollowersQuantity>
        {followers.toLocaleString("en")} Followers
      </SC.FollowersQuantity>

      {!noClick ? (
        <SC.StartBtn onClick={onClickStartBtn}> Follow </SC.StartBtn>
      ) : (
        <SC.AfterPushBtn onClick={onClickAfterPushStartBtn}>
          Following
        </SC.AfterPushBtn>
      )}
    </SC.CardContainer>
  );
};
