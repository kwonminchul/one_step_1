import styled from "@emotion/styled";

export const ListWrapper = styled.div`
  width: 1920px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
`;

export const Wrapper = styled.div`
  width: 1920px;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  /* border: none; */
  margin-top: 58px;
  /* background-color: #000000; */
`;

export const TitleWrapper = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: #000000;
  margin-top: 89px;
`;

export const Body = styled.div`
  /* width: 100%; */
  /* height: 100%; */
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  /* color: #333333; */
  margin-right: 116px;
  margin-bottom: 90px;
  cursor: pointer;
`;

export const LikeIcon = styled.img`
  color: #555555;
  width: 21.66px;
  height: 18.23px;
  margin-left: 130px;
  margin-top: 20px;
  position: absolute;
  cursor: pointer;
`;

export const ItemWrapper = styled.div`
  width: 348px;
  height: 560px;
  /* margin-top: 45px; */
  margin-left: 32px;
  margin-top: 50px;
  margin-bottom: 100px;
`;

export const ImageWrapper = styled.div`
  width: 348px;
  height: 466px;
  background-color: #c4c4c4;
`;

export const Image = styled.img`
  width: 348px;
  height: 466px;
`;

export const PPWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 18px;
`;

export const PercentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Percent = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #f65656;
  margin-right: 23px;
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Price = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #000000;
`;

export const UserNameWapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 13px;
`;

export const UserName = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #555555;
`;

export const RemarksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  font-weight: 500;
  font-size: 16px;
  color: #555555;
  margin-top: 13px;
`;

export const Remarks = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
