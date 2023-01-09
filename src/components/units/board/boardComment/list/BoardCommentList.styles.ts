import styled from "@emotion/styled";
import { Rate, Modal } from "antd";

export const ItemWrapper = styled.div`
  width: 100%;
  margin-bottom: 39px;
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const MainWrapper = styled.div``;
export const WriterWrapper = styled.div``;
export const Writer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 400;
  width: 103px;
  height: 27px;
  color: #ffffff;
  border: 1px solid #000000;
  background-color: #000000;
  margin-left: 10px;
  margin-right: 50px;
`;
export const Contents = styled.div`
  width: 1000px;
  height: 100%;
`;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  border-bottom: 1px dashed #c0c0c0;
  width: 1460px;
  margin-top: 10px;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  /* width: 1460px; */
  margin-left: 200px;
  margin-bottom: 21px;
`;

export const AnswerIcon = styled.img`
  width: 20px;
  height: 20px;
  color: #bdbdbd;
  cursor: pointer;
  margin-right: 20px;
`;

export const UpdateIcon = styled.img`
  width: 18px;
  height: 18px;
  color: #bdbdbd;
  cursor: pointer;
  margin-right: 16px;
`;

export const DeleteIcon = styled.img`
  width: 14px;
  height: 14px;
  cursor: pointer;
  color: #bdbdbd;
`;

export const DateString = styled.div`
  color: #000000;
  font-size: 15px;
  font-weight: 400;
  margin-right: 70px;
`;

export const PasswordModal = styled(Modal)``;

export const PasswordInput = styled.input`
  width: 100%;
  margin-top: 10px;
`;
