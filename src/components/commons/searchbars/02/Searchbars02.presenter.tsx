import {
  SearchOutlinedIcon,
  Searchbar,
  SearchbarInput,
} from "./Searchbars02.styles";
import { ISearchbars02UIProps } from "./Searchbars02.types";

export default function Searchbars02UI(props: ISearchbars02UIProps) {
  return (
    <Searchbar>
      <SearchbarInput onChange={props.onChangeSearchbar} />
      <SearchOutlinedIcon />
    </Searchbar>
  );
}
