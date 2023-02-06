import { SearchOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Searchbar = styled.div`
  width: 534px;
  height: 52px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 50px;
`;

export const SearchOutlinedIcon = styled(SearchOutlined)`
  color: #8f949c;
  font-size: 20.78px;
  cursor: pointer;

  :hover {
    color: #8f949c;
  }
  position: absolute;
  /* right: 120px; */
`;

export const SearchbarInput = styled.input`
  width: 534px;
  height: 100%;
  border: none;
  outline: none;
  background: none;
  border-bottom: 3px solid #000000;
  margin-left: 33px;
`;
