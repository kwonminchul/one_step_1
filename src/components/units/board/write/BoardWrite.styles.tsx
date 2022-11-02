import styled from "@emotion/styled";
import { Modal } from "antd";
import exp from "constants";
import dynamic from "next/dynamic";

import DaumPostcode from "react-daum-postcode";
import { ISubmitButtonProps } from "./BoardWrite.types";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const AWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fbfbfb;
`;

export const Wrapper = styled.div`
  width: 100%;
  margin: 100px;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  background-color: #fbfbfb;
`;

export const Title = styled.div`
  width: 1737.5px;
  font-size: 40px;
  font-weight: 700;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 20px;
  margin-left: 110px;
`;

export const WriterWrapper = styled.div`
  border-top: 3px solid #555555;
  width: 1737.5px;
`;

export const Name = styled.input`
  width: 1419px;
  height: 56px;
  padding-left: 16px;
  border: 1px solid #e9e9e9;
  background-color: #e9e9e9;
`;

export const Label = styled.div`
  margin-top: 15px;
  margin-bottom: 30px;
  font-size: 24px;
  font-weight: 500;
  color: #000000;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 30px;
`;

export const GpsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  padding-right: 1515px;
  margin-bottom: -20px;
`;

export const Remarks = styled.input`
  width: 1419px;
  height: 56px;
  padding-left: 16px;
  border: 1px solid #e9e9e9;
  background-color: #e9e9e9;
`;

export const Contents = styled(ReactQuill)`
  width: 1419px;
  height: 431px;
  margin-bottom: 70px;
`;

export const Price = styled.input`
  width: 1419px;
  height: 56px;
  padding-left: 16px;
  border: 1px solid #e9e9e9;
  background-color: #e9e9e9;
`;

export const Tages = styled.input`
  width: 1419px;
  height: 56px;
  padding-left: 16px;
  border: 1px solid #e9e9e9;
  background-color: #e9e9e9;
`;

export const LZAWrapper = styled.div`
  display: flex;
  align-content: space-between;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const ZipcodeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 26px;
`;

export const Zipcode = styled.input`
  width: 77px;
  height: 52px;
  font-size: 16px;
  font-weight: 400;
  padding-left: 16px;
  color: #bdbdbd;
`;

export const SearchButton = styled.button`
  width: 124px;
  height: 51px;
  margin-left: 16px;
  background-color: #000000;
  cursor: pointer;
  color: #ffffff;
`;

export const AddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 26px;
`;

export const Address = styled.input`
  width: 1210px;
  height: 52px;
  margin-top: 16px;
  border: 1px solid #e9e9e9;
  background-color: #e9e9e9;
`;

export const ZipAddWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageWrapper = styled.div`
  width: 1419px;
  margin-top: 20px;
  margin-right: 200px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
`;

export const CancelButton = styled.button`
  width: 195px;
  height: 77px;
  color: #000000;
  background-color: #ffffff;
  border: 1px solid #000000;
  font-size: 16px;
  font-weight: 500;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  width: 195px;
  height: 77px;
  border: 1px solid #000000;
  font-size: 16px;
  font-weight: 500;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;
  color: #ffffff;

  background-color: ${(props: ISubmitButtonProps) =>
    props.isActive ? "#000000" : "none"};
`;

export const AddressModal = styled(Modal)``;

export const AddressSearchInput = styled(DaumPostcode)``;

export const Map = styled.div`
  width: 384px;
  height: 252px;
`;

export const Line = styled.div`
  width: 1737.5px;
  border-bottom: 1px solid #999999;
  margin-top: 10px;
`;

export const LineA = styled.div`
  width: 1737.5px;
  border-bottom: 3px solid #555555;
  margin-top: 76px;
`;
