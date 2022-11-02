import {
  SearchOutlinedIcon,
  Searchbar,
  SearchbarInput,
} from "./Searchbars01.styles";
import { ISearchbars01UIProps } from "./Searchbars01.types";

export default function Searchbars01UI(props: ISearchbars01UIProps) {
  return (
    <Searchbar>
      <SearchbarInput onChange={props.onChangeSearchbar} />
      <SearchOutlinedIcon />
    </Searchbar>
  );
}
