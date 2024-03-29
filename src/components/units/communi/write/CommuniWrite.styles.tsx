import styled from "@emotion/styled";
import { Modal } from "antd";
import { ISubmitButtonProps } from "./CommuniWrite.types";
import DaumPostcode from "react-daum-postcode";

export const Wrapper = styled.div`
  width: 1200px;
  /* height: 1847px; */
  border: 1px solid black;
  margin: 100px;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px #518a80;
  background-color: #f7f7f2;
`;

export const Title = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 36px;
  font-weight: bold;
  color: #525250;
`;

export const WriterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 40px;
`;

export const Writer = styled.input`
  width: 486px;
  height: 52px;
  padding-left: 16px;
  box-shadow: 0px 0px 5px #518a80;
  border: 1px solid #87b0b1;
  background-color: #f7f7f2;
`;

export const Password = styled.input`
  width: 486px;
  height: 52px;
  padding-left: 16px;
  box-shadow: 0px 0px 5px #518a80;
  border: 1px solid #87b0b1;
  background-color: #f7f7f2;
`;

export const Label = styled.div`
  padding-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
  color: #525250;
`;

export const InputWrapper = styled.div`
  padding-top: 40px;
`;

export const Subject = styled.input`
  width: 996px;
  height: 52px;
  padding-left: 16px;
  box-shadow: 0px 0px 5px #518a80;
  border: 1px solid #87b0b1;
  background-color: #f7f7f2;
`;

export const Contents = styled.textarea`
  width: 996px;
  height: 480px;
  padding-left: 16px;
  padding: 14px;
  box-shadow: 0px 0px 5px #518a80;
  border: 1px solid #87b0b1;
  background-color: #f7f7f2;
`;

export const ZipcodeWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Zipcode = styled.input`
  width: 77px;
  height: 52px;
  padding-left: 16px;
  box-shadow: 0px 0px 5px #518a80;
  border: 1px solid #87b0b1;
  background-color: #f7f7f2;
`;

export const SearchButton = styled.button`
  width: 124px;
  height: 52px;
  margin-left: 16px;
  background-color: #3d6764;
  box-shadow: 0px 0px 20px #518a80;
  cursor: pointer;
  color: #f7f7f2;
`;

export const Address = styled.input`
  width: 996px;
  height: 52px;
  margin-top: 16px;
  padding-left: 16px;
  box-shadow: 0px 0px 5px #518a80;
  border: 1px solid #87b0b1;
  background-color: #f7f7f2;
`;

export const Youtube = styled.input`
  width: 996px;
  height: 52px;
  padding-left: 16px;
  box-shadow: 0px 0px 5px #518a80;
  border: 1px solid #87b0b1;
  background-color: #f7f7f2;
`;

export const ImageWrapper = styled.div`
  width: 996px;
  padding-top: 40px;
`;

export const UploadButton = styled.button`
  width: 78px;
  height: 78px;
  background-color: #3d6764;
  margin-right: 24px;
  outline: none;
  border: none;
  cursor: pointer;
  color: #f7f7f2;
`;

export const OptionWrapper = styled.div`
  width: 996px;
  padding-top: 40px;
`;

export const RadioButton = styled.input`
  cursor: pointer;
`;

export const RadioLabel = styled.label`
  margin-left: 8px;
  margin-right: 20px;
  font-weight: 500;
  cursor: pointer;
  color: #525250;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
`;

export const CancelButton = styled.button`
  width: 179px;
  height: 52px;
  color: #f7f7f2;
  background-color: #525250;
  border: none;
  font-size: 16px;
  font-weight: 500;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;

  :hover {
    background-color: #3d6764;
    border-color: #3d6764;
    box-shadow: 0px 0px 20px #518a80;
    color: #f7f7f2;
  }
`;

export const SubmitButton = styled.button`
  width: 179px;
  height: 52px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;
  color: #f7f7f2;
  box-shadow: 0px 0px 20px #518a80;

  background-color: ${(props: ISubmitButtonProps) =>
    props.isActive ? "#3d6764" : "none"};
`;

export const Error = styled.div`
  padding-top: 10px;
  font-size: 14px;
  color: red;
`;

export const AddressModal = styled(Modal)``;

export const AddressSearchInput = styled(DaumPostcode)``;
