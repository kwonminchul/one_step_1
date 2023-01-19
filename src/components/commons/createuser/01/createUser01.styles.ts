import styled from "@emotion/styled";
import { ISubmitButtonProps } from "./createUser01.types";

export const Wrapper = styled.div`
  width: 1920px;
  height: 915px;
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
  /* margin-left: 450px; */
`;

export const InputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
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
  margin-left: 73px;
`;

export const UserPassword = styled.input`
  width: 611px;
  height: 56px;
  padding-left: 18px;
  border: 1px solid #e9e9e9;
  background-color: #e9e9e9;
  margin-left: 52px;
`;

export const UserPasswordCk = styled.input`
  width: 611px;
  height: 56px;
  padding-left: 18px;
  border: 1px solid #e9e9e9;
  background-color: #e9e9e9;
  margin-left: 5px;
`;

export const UserName = styled.input`
  width: 611px;
  height: 56px;
  padding-left: 18px;
  border: 1px solid #e9e9e9;
  background-color: #e9e9e9;
  margin-left: 93px;
`;

export const InputWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  width: 1737.5px;
  margin-top: 41px;
  /* margin-left: 31px; */
  border-top: 3px solid #555555;
`;

export const CancelButton = styled.button`
  width: 186px;
  height: 56px;
  border: 1px solid #000000;
  font-size: 20px;
  font-weight: 700;
  color: #000000;
  background-color: #ffffff;
  cursor: pointer;
  margin-top: 60px;
  margin-right: 21px;
  margin-left: 670px;
`;

export const CreateButton = styled.button`
  width: 186px;
  height: 56px;
  border: 1px solid #000000;
  font-size: 20px;
  font-weight: 700;
  color: #000000;
  background-color: #ffffff;
  cursor: pointer;
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
