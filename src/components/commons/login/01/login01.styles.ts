import styled from "@emotion/styled";
import { ISubmitButtonProps } from "./login01.types";

export const Wrapper = styled.div`
  width: 100%;
  height: 871px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  background-color: #ffffff;
`;

export const LoginTitle = styled.div`
  width: 1737.5px;
  /* height: 665px; */
  margin-top: 94px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-bottom: 3px solid #555555;
`;

export const ETitle = styled.div`
  font-size: 40px;
  font-weight: 400;
  color: #000000;
  margin-bottom: 114px;
`;

export const LoginWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const InputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 174px;
`;

export const Label = styled.div`
  font-size: 24px;
  font-weight: 400;
  margin-right: 50px;
`;

export const UserId = styled.input`
  width: 611px;
  height: 56px;
  padding-left: 18px;
  border: 1px solid #e9e9e9;
  background-color: #e9e9e9;
  margin-left: 25px;
`;

export const UserPassword = styled.input`
  width: 611px;
  height: 56px;
  padding-left: 18px;
  border: 1px solid #e9e9e9;
  background-color: #e9e9e9;
  margin-left: 5px;
`;

export const InputWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  margin-top: 200px;
  margin-left: 31px;
`;

export const LoginButton = styled.button`
  width: 186px;
  height: 136px;
  border: none;
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  cursor: pointer;

  background-color: ${(props: ISubmitButtonProps) =>
    props.isActive ? "#000000" : "none"};
`;

export const MainTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 1920px;
  height: 100px;
  background: #000000;
`;

export const Title = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: #ffffff;
  margin: 60px;
  cursor: pointer;
`;

export const TitleLogo = styled.img`
  width: 140px;
  height: 44px;
  margin: 60px;
`;

export const TitleCr = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;
  margin: 60px;
  cursor: pointer;
`;

export const TitleBa = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;
  margin: 60px;
  cursor: pointer;
`;
