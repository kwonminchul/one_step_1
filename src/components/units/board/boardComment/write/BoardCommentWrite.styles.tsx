import styled from "@emotion/styled";
import { Rate } from "antd";

export const CommentWrapper = styled.div`
  width: 1651px;
  margin-top: 71px;
  margin-bottom: 18px;
  border-bottom: 1px solid #c0c0c0;
`;

export const InputCommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CommentSpace = styled.textarea`
  width: 1652px;
  height: 231px;
  border: 1px solid #e9e9e9;
  background-color: #e9e9e9;
  padding-left: 40px;
  padding-top: 36px;
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 17px;
`;

export const BottomCommentWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ButtonFoot = styled.button`
  width: 195px;
  height: 77px;
  background-color: #000000;
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  cursor: pointer;
  margin-left: 1452px;
  margin-bottom: 18px;
`;

export const Star = styled(Rate)``;
