import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import { ISubmitButtonProps } from "./BoardDetail.types";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  background-color: #ffffff;
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 68px;
`;

export const ImageWrapper = styled.div`
  width: 863px;
  height: 611px;
  background-color: #a0a0a0;
`;

export const Image = styled.img`
  width: 863px;
  height: 611px;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 73px;
`;

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Name = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #000000;
  margin-top: 9px;
`;

export const PriceWrapper = styled.div`
  width: 853px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  border-bottom: 3px solid #555555;
  margin-bottom: 20px;
  margin-top: 51px;
`;

export const PriceTop = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Sell = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #000000;
  margin-right: 60px;
  margin-bottom: 23px;
`;

export const Price = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #000000;
  margin-right: 3px;
  margin-bottom: 22px;
`;

export const Won = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #000000;
  margin-bottom: 24px;
`;

export const RemarksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Remarks = styled.div`
  width: 800px;
  font-size: 40px;
  font-weight: 700;
  color: #000000;
  margin-top: 9px;
`;

export const TagsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 858px;
  border-bottom: 1px solid #c0c0c0;
`;

export const Tags = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  color: #f65656;
  margin-top: 30px;
  margin-bottom: 14px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 31px;
  margin-left: 45px;
`;

export const LikeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 28px;
`;

export const LikeBoxM = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #000000;
  margin-right: 22px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const LikeBoxI = styled.img`
  width: 18px;
  height: 16px;
  color: #c0c0c0;
  margin-right: 22px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const LikeBoxP = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #000000;
  margin-right: 22px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const BasketBox = styled.button`
  width: 436px;
  height: 100px;
  background-color: #000000;
  border: 1px solid #000000;
  font-size: 30px;
  font-weight: 400;
  color: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const BuyBox = styled.button`
  width: 309px;
  height: 100px;
  background-color: #000000;
  border: 1px solid #000000;
  font-size: 30px;
  font-weight: 400;
  color: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 19px;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 170px;
`;

export const Label = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: #000000;
  margin-bottom: 19px;
  margin-right: 1500px;
`;

export const ContentsL = styled.div`
  width: 1784.5px;
  border-bottom: 3px solid #555555;
`;

export const Contents = styled(ReactQuill)`
  width: 821px;
  height: 143px;
  margin-top: 19px;
  font-size: 20px;
  font-weight: 400;
`;

export const MidImageWrapper = styled.div`
  width: 1695px;
  height: 100%;
  background-color: #a0a0a0;
  margin-top: 105px;
`;

export const MidImage = styled.img`
  width: 1695px;
  /* height: 100%; */
`;

export const MapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1476px;
  margin-bottom: 86px;
  margin-top: 97px;
`;

export const MapInfo = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: #000000;
  margin-bottom: 19px;
`;

export const MapSubInfo = styled.div`
  font-size: 24px;
  font-weight: 400;
  color: #000000;
  margin-bottom: 10px;
`;

export const Map = styled.div`
  width: 1476px;
  height: 791px;
  margin-bottom: 33px;
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
