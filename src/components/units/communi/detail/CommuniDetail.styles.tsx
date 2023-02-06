// import styled from "@emotion/styled";
// import dynamic from "next/dynamic";
// import { ISubmitButtonProps } from "./CommuniDetail.types";

// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

// export const Wrapper = styled.div`
//   width: 100%;
//   height: auto;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   border: none;
//   background-color: #ffffff;
// `;

// export const TopWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
//   margin-top: 68px;
// `;

// export const ImageWrapper = styled.div`
//   width: 863px;
//   height: 611px;
//   background-color: #a0a0a0;
// `;

// export const Image = styled.img`
//   width: 863px;
//   height: 611px;
// `;

// export const ItemWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-left: 73px;
// `;

// export const NameWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
// `;

// export const Name = styled.div`
//   font-size: 12px;
//   font-weight: 400;
//   color: #000000;
//   margin-top: 9px;
// `;

// export const PriceWrapper = styled.div`
//   width: 853px;
//   display: flex;
//   flex-direction: row;
//   align-items: flex-end;
//   justify-content: space-between;
//   border-bottom: 3px solid #555555;
//   margin-bottom: 20px;
//   margin-top: 51px;
// `;

// export const PriceTop = styled.div`
//   display: flex;
//   flex-direction: row;
// `;

// export const Sell = styled.div`
//   font-size: 12px;
//   font-weight: 400;
//   color: #000000;
//   margin-right: 60px;
//   margin-bottom: 23px;
// `;

// export const Price = styled.div`
//   font-size: 14px;
//   font-weight: 700;
//   color: #000000;
//   margin-right: 3px;
//   margin-bottom: 22px;
// `;

// export const Won = styled.div`
//   font-size: 12px;
//   font-weight: 400;
//   color: #000000;
//   margin-bottom: 24px;
// `;

// export const RemarksWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
// `;

// export const Remarks = styled.div`
//   width: 800px;
//   font-size: 40px;
//   font-weight: 700;
//   color: #000000;
//   margin-top: 9px;
// `;

// export const TagsWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
//   width: 858px;
//   border-bottom: 1px solid #c0c0c0;
// `;

// export const Tags = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
//   font-size: 16px;
//   font-weight: 500;
//   color: #f65656;
//   margin-top: 30px;
//   margin-bottom: 14px;
// `;

// export const ButtonsWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
//   margin-top: 31px;
//   margin-left: 45px;
// `;

// export const LikeWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
//   margin-bottom: 28px;
// `;

// export const LikeBoxM = styled.div`
//   font-size: 12px;
//   font-weight: 700;
//   color: #000000;
//   margin-right: 22px;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
// `;

// export const LikeBoxI = styled.img`
//   width: 18px;
//   height: 16px;
//   color: #c0c0c0;
//   margin-right: 22px;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
// `;

// export const LikeBoxP = styled.div`
//   font-size: 12px;
//   font-weight: 700;
//   color: #000000;
//   margin-right: 22px;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
// `;

// export const BasketBox = styled.button`
//   width: 436px;
//   height: 100px;
//   background-color: #000000;
//   border: 1px solid #000000;
//   font-size: 30px;
//   font-weight: 400;
//   color: #ffffff;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
// `;

// export const BuyBox = styled.button`
//   width: 309px;
//   height: 100px;
//   background-color: #000000;
//   border: 1px solid #000000;
//   font-size: 30px;
//   font-weight: 400;
//   color: #ffffff;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   margin-right: 19px;
// `;

// export const BottomWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-top: 170px;
// `;

// export const Label = styled.div`
//   font-size: 32px;
//   font-weight: 700;
//   color: #000000;
//   margin-bottom: 19px;
//   margin-right: 1500px;
// `;

// export const ContentsL = styled.div`
//   width: 1784.5px;
//   border-bottom: 3px solid #555555;
// `;

// export const Contents = styled(ReactQuill)`
//   width: 821px;
//   height: 143px;
//   margin-top: 19px;
//   font-size: 20px;
//   font-weight: 400;
// `;

// export const MidImageWrapper = styled.div`
//   width: 1695px;
//   height: 100%;
//   background-color: #a0a0a0;
//   margin-top: 105px;
// `;

// export const MidImage = styled.img`
//   width: 1695px;
//   /* height: 100%; */
// `;

// export const MapWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 1476px;
//   margin-bottom: 86px;
//   margin-top: 97px;
// `;

// export const MapInfo = styled.div`
//   font-size: 32px;
//   font-weight: 700;
//   color: #000000;
//   margin-bottom: 19px;
// `;

// export const MapSubInfo = styled.div`
//   font-size: 24px;
//   font-weight: 400;
//   color: #000000;
//   margin-bottom: 10px;
// `;

// export const Map = styled.div`
//   width: 1476px;
//   height: 791px;
//   margin-bottom: 33px;
// `;

// export const UpdateIcon = styled.img`
//   width: 18px;
//   height: 18px;
//   color: #bdbdbd;
//   cursor: pointer;
//   margin-right: 16px;
// `;

// export const DeleteIcon = styled.img`
//   width: 14px;
//   height: 14px;
//   cursor: pointer;
//   color: #bdbdbd;
// `;

import styled from "@emotion/styled";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";
import ReactPlayer from "react-player";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  border: none;
  background-color: #ffffff;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 68px;
  margin-left: 100px;
`;

// export const CardWrapper = styled.div`
//   width: 100%;
//   border: 1px solid black;
//   padding-top: 80px;
//   padding-bottom: 100px;
//   padding-left: 102px;
//   padding-right: 102px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   border: none;
//   box-shadow: 0px 0px 10px #518a80;
//   background-color: #f7f7f2;
// `;

// export const Header = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
//   border-bottom: 1px solid #518a80;
//   padding-bottom: 20px;
// `;

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 68px;
`;

export const Avatar = styled.img`
  margin-right: 10px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const IconWrapper = styled.div`
  text-align: center;
  margin-top: 70px;
  margin-left: 30px;
`;

export const IconLink = styled.img`
  cursor: pointer;
`;

export const IconLocation = styled.img`
  cursor: pointer;

  :hover {
  }
`;

export const Writer = styled.div``;

export const CreatedAt = styled.div``;

export const Body = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

export const Title = styled.h1`
  margin-top: 60px;
  margin-left: 100px;
  margin-right: 100px;
`;

export const ImageWrapper = styled.div`
  width: 1695px;
  height: 100%;
  background-color: #a0a0a0;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const Contents = styled.div`
  margin-top: 30px;
  margin-left: 100px;
  margin-right: 100px;
`;

export const Youtube = styled(ReactPlayer)`
  margin: auto;
`;

export const LikeWrapper = styled.div`
  padding-top: 160px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Like = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 40px;
`;

export const LikeIcon = styled(LikeOutlined)`
  font-size: 24px;
  color: gold;
  margin: 0px 20px;
  cursor: pointer;
`;

export const LikeNumber = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: gold;
`;

export const UnlikeIcon = styled(DislikeOutlined)`
  font-size: 24px;
  color: #525250;
  margin: 0px 20px;
  cursor: pointer;
`;

export const UnlikeNumber = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: #525250;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
  /* border-bottom: 1px solid #ffffff; */
  padding-bottom: 87px;
`;

export const Button = styled.button`
  width: 179px;
  height: 45px;
  font-weight: 700;
  background-color: #ffffff;
  color: #525250;
  border: 1px solid gray;
  border-radius: 10px;
  margin: 0px 12px;
  cursor: pointer;

  :hover {
    background-color: #3d6764;
    border-color: #3d6764;
    box-shadow: 0px 0px 20px #518a80;
    color: #fff61c;
  }
`;

export const Foot = styled.div`
  width: 100%;
  width: 100%;
  border: 1px solid black;
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

export const CommentWrapper = styled.div`
  width: 1200px;
  margin: 0px 100px;
`;

export const Comment = styled.img`
  /* display: flex;
  flex-direction: row; */
`;

export const CommentMent = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #525250;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 22px;
  margin-bottom: 20px;
`;

export const Writer1 = styled.input`
  width: 180px;
  height: 52px;
  padding-left: 20px;
  box-shadow: 0px 0px 5px #518a80;
  border: 1px solid #87b0b1;
  background-color: #f7f7f2;
  margin-right: 20px;
`;

export const Password1 = styled.input`
  width: 180px;
  height: 52px;
  padding-left: 20px;
  box-shadow: 0px 0px 5px #518a80;
  border: 1px solid #87b0b1;
  background-color: #f7f7f2;
  margin-right: 20px;
`;

export const Star = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  color: #bdbdbd;
  margin-top: 40px;
`;

export const InputCommentWrapper = styled.div``;

export const CommentSpace = styled.input`
  width: 1200px;
  min-height: 108px;
  padding: 20px;
  /* height: 161px;
  padding-left: 16px; */
  box-shadow: 0px 0px 5px #518a80;
  border: 1px solid #87b0b1;
  background-color: #f7f7f2;
  border-bottom: 1px solid #518a80;
`;

export const BottomCommentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContentsLength = styled.div`
  width: 100%;
  height: 51px;
  line-height: 51px;
  padding-left: 20px;
  color: #525250;
`;

export const ButtonFoot = styled.button`
  width: 91px;
  height: 51px;
  background-color: #518a80;
  box-shadow: 0px 0px 20px #518a80;
  color: white;
  cursor: pointer;
`;
