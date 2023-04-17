import styled from "styled-components";

import img from "../../images/picture2.png";
import logo from "../../images/Vector.png";
import circle from "../../images/Ellipse.png";

export const CardContainer = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  width: 380px;
  height: 460px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const Logo = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 76px;
  height: 22px;
  background-image: url(${logo});
`;

export const PictureSection = styled.div`
  width: 308px;
  height: 168px;
  background-image: url(${img});
  margin-bottom: 18px;
`;

export const DividingStrip = styled.div`
  width: 380px;
  height: 8px;
  margin-bottom: 42px;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const AvatarWindow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 90px;
  height: 80px;
  position: absolute;
  top: 181px;
  background-image: url(${circle});
`;

export const Avatar = styled.img`
  width: 63px;
  height: 62px;

  border-radius: 50px;
`;
export const UserName = styled.p`
  font-family: "Courier New", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.2;
  margin-bottom: 16px;
  color: #b96950;
`;

export const Quantity = `
     font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #ebd8ff;
`;
export const TweewsQuantity = styled.p`
  ${Quantity}
  margin-bottom: 16px;
`;

export const FollowersQuantity = styled.p`
  ${Quantity}
  margin-bottom: 26px;
`;

export const ButtonStyles = `
    width: 196px;
  height: 50px;

  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: #373737;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
`;

export const StartBtn = styled.button`
  ${ButtonStyles};
  background-color: #ebd8ff;
`;

export const AfterPushBtn = styled.button`
  ${ButtonStyles};
  background-color: #5cd3a8;
`;
