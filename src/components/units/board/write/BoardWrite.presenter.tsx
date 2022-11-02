import Upload01 from "../../../commons/uploads/01/Uploads01.container";
import * as O from "./BoardWrite.styles";
import { v4 as uuidv4 } from "uuid";

export default function BoardWriteUI(props: any) {
  return (
    <O.AWrapper>
      {props.isOpen && (
        <O.AddressModal visible={true}>
          <O.AddressSearchInput onComplete={props.onCompleteAddressSearch} />
        </O.AddressModal>
      )}
      <O.Wrapper>
        <O.Title>{props.isEdit ? "상품 수정" : "상품 등록"}</O.Title>
        <O.WriterWrapper>
          <O.InputWrapper>
            <O.Label>상품명</O.Label>
            <O.Name
              id="name"
              type="text"
              placeholder="상품명을 작성해주세요"
              onChange={props.onChangeInputs}
              defaultValue={props.data?.fetchUseditem.name}
            />
          </O.InputWrapper>
          <O.Line />
          <O.InputWrapper>
            <O.Label>상품 요약</O.Label>
            <O.Remarks
              id="remarks"
              placeholder="상품요약을 작성해주세요"
              onChange={props.onChangeInputs}
              defaultValue={props.data?.fetchUseditem.remarks}
            />
          </O.InputWrapper>
          <O.Line />
          <O.InputWrapper>
            <O.Label>상품 내용</O.Label>
            <O.Contents
              id="contents"
              placeholder="상품을 설명해주세요"
              onChange={props.onChangeInputs}
              defaultValue={props.data?.fetchUseditem.contents}
            />
          </O.InputWrapper>
          <O.Line />
          <O.InputWrapper>
            <O.Label>판매 가격</O.Label>
            <O.Price
              id="price"
              placeholder="판매 가격을 입력해주세요"
              onChange={props.onChangeInputs}
              defaultValue={props.data?.fetchUseditem.price}
            />
          </O.InputWrapper>
          <O.Line />
          <O.InputWrapper>
            <O.Label>태그 입력</O.Label>
            <O.Tages
              id="tags"
              placeholder="#태그 #태그 #태그"
              onChange={props.onChangeInputs}
              defaultValue={props.data?.fetchUseditem.tags}
            />
          </O.InputWrapper>
          <O.Line />
        </O.WriterWrapper>
        <O.GpsWrapper>
          <O.Label>브랜드 위치</O.Label>
        </O.GpsWrapper>
        <O.InputWrapper>
          <O.LZAWrapper>
            <O.Map id="map" ref={props.mapContainerRef}></O.Map>
            <O.ZipAddWrapper>
              <O.ZipcodeWrapper>
                <O.Zipcode
                  placeholder="07250"
                  readOnly
                  value={
                    props.zipcode ||
                    props.data?.fetchUseditem.useditemAddress?.zipcode ||
                    ""
                  }
                  defaultValue={
                    props.data?.fetchUseditem.useditemAddress.zipcode
                  }
                />
                <O.SearchButton onClick={props.onClickAddressSearch}>
                  우편번호 검색
                </O.SearchButton>
              </O.ZipcodeWrapper>
              <O.AddressWrapper>
                <O.Address
                  readOnly
                  value={
                    props.address ||
                    props.data?.fetchUseditem.useditemAddress?.address ||
                    ""
                  }
                />
                <O.Address
                  onChange={props.onChangeAddressDetail}
                  defaultValue={
                    props.data?.fetchUseditem.useditemAddress?.addressDetail ||
                    ""
                  }
                />
              </O.AddressWrapper>
            </O.ZipAddWrapper>
          </O.LZAWrapper>
        </O.InputWrapper>
        <O.Line />
        <O.ImageWrapper>
          <O.Label>사진 첨부</O.Label>
          {props.fileUrls.map((el: string, index: number) => (
            <Upload01
              key={uuidv4()}
              index={index}
              fileUrl={el}
              onChangeFileUrls={props.onChangeFileUrls}
            />
          ))}
        </O.ImageWrapper>
        <O.LineA />
        <O.ButtonWrapper>
          <O.CancelButton onClick={props.onClickCancel}>취소</O.CancelButton>
          <O.SubmitButton
            onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
            isActive={props.isEdit ? true : props.isActive}
          >
            {props.isEdit ? "수정" : "등록"}
          </O.SubmitButton>
        </O.ButtonWrapper>
      </O.Wrapper>
    </O.AWrapper>
  );
}
