import * as SC from "./App.styled";

export const App = () => {
  return (
    <SC.MainContainer>
      <SC.CardContainer>
        <SC.Logo></SC.Logo>
        <SC.PictureSection></SC.PictureSection>
        <SC.DividingStrip></SC.DividingStrip>

        <SC.AvatarWindow>
          <SC.Avatar></SC.Avatar>
        </SC.AvatarWindow>

        <SC.TweewsQuantity>777 Tweets</SC.TweewsQuantity>
        <SC.FollowersQuantity>100500 Followers</SC.FollowersQuantity>

        <SC.StartBtn> FOLLOW </SC.StartBtn>
      </SC.CardContainer>
    </SC.MainContainer>
  );
};
