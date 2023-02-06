import Upload01 from "../../../commons/uploads/01/Uploads01.container";
import * as O from "./CommuniWrite.styles";
import { ICommuniWriteUIProps } from "./CommuniWrite.types";
import { v4 as uuidv4 } from "uuid";

export default function CommuniWriteUI(props: ICommuniWriteUIProps) {
  console.log(props.inputsError);
  return (
    <>
      {props.isOpen && (
        <O.AddressModal visible={true}>
          <O.AddressSearchInput onComplete={props.onCompleteAddressSearch} />
        </O.AddressModal>
      )}
      <O.Wrapper>
        <O.Title>
          {props.isEdit ? "커뮤니케이션 수정" : "커뮤니티 등록"}
        </O.Title>
        <O.WriterWrapper>
          <O.InputWrapper>
            <O.Label>작성자</O.Label>
            <O.Writer
              id="writer"
              type="text"
              placeholder="이름을 입력해주세요."
              onChange={props.onChangeInputs}
              defaultValue={props.data?.fetchBoard.writer || ""}
              readOnly={!!props.data?.fetchBoard.writer}
            />
            <O.Error>{props.inputsError.writer}</O.Error>
          </O.InputWrapper>
          <O.InputWrapper>
            <O.Label>비밀번호</O.Label>
            <O.Password
              id="password"
              type="password"
              placeholder="비밀번호를 입력해주세요."
              onChange={props.onChangeInputs}
            />
            <O.Error>{props.inputsError.password}</O.Error>
          </O.InputWrapper>
        </O.WriterWrapper>
        <O.InputWrapper>
          <O.Label>제목</O.Label>
          <O.Subject
            id="title"
            type="text"
            placeholder="제목을 입력해주세요."
            onChange={props.onChangeInputs}
            defaultValue={props.data?.fetchBoard.title}
          />
          <O.Error>{props.inputsError.title}</O.Error>
        </O.InputWrapper>
        <O.InputWrapper>
          <O.Label>내용</O.Label>
          <O.Contents
            id="contents"
            placeholder="내용을 입력해주세요."
            onChange={props.onChangeInputs}
            defaultValue={props.data?.fetchBoard.contents}
          />
          <O.Error>{props.inputsError.contents}</O.Error>
        </O.InputWrapper>
        <O.InputWrapper>
          <O.Label>주소</O.Label>
          <O.ZipcodeWrapper>
            <O.Zipcode
              placeholder="07250"
              readOnly
              value={
                props.zipcode ||
                props.data?.fetchBoard.boardAddress?.zipcode ||
                ""
              }
            />
            <O.SearchButton onClick={props.onClickAddressSearch}>
              우편번호 검색
            </O.SearchButton>
          </O.ZipcodeWrapper>
          <O.Address
            readOnly
            value={
              props.address ||
              props.data?.fetchBoard.boardAddress?.address ||
              ""
            }
          />
          <O.Address
            onChange={props.onChangeAddressDetail}
            defaultValue={
              props.data?.fetchBoard.boardAddress?.addressDetail || ""
            }
          />
        </O.InputWrapper>
        <O.InputWrapper>
          <O.Label>유튜브</O.Label>
          <O.Youtube
            placeholder="링크를 복사해주세요."
            onChange={props.onChangeYoutubeUrl}
            defaultValue={props.data?.fetchBoard.youtubeUrl || ""}
          />
        </O.InputWrapper>
        <O.ImageWrapper>
          <O.Label>사진첨부</O.Label>
          {props.fileUrls.map((el, index) => (
            <Upload01
              key={uuidv4()}
              index={index}
              fileUrl={el}
              onChangeFileUrls={props.onChangeFileUrls}
            />
          ))}
        </O.ImageWrapper>
        <O.OptionWrapper>
          <O.Label>메인설정</O.Label>
          <O.RadioButton type="radio" id="youtube" name="radio-button" />
          <O.RadioLabel htmlFor="youtube">유튜브</O.RadioLabel>
          <O.RadioButton type="radio" id="image" name="radio-button" />
          <O.RadioLabel htmlFor="image">사진</O.RadioLabel>
        </O.OptionWrapper>
        <O.ButtonWrapper>
          <O.SubmitButton
            onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
            isActive={props.isEdit ? true : props.isActive}
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </O.SubmitButton>
          <O.CancelButton onClick={props.onClickCancel}>
            취소하기
          </O.CancelButton>
        </O.ButtonWrapper>
      </O.Wrapper>
    </>
  );
}
