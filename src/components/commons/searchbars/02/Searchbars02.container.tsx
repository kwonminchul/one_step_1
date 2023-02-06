import { ChangeEvent } from "react";
import Searchbars01UI from "./Searchbars02.presenter";
import { ISearchbars02Props } from "./Searchbars02.types";
import _ from "lodash";

export default function Searchbars02(props: ISearchbars02Props) {
  const getDebounce = _.debounce((value: string) => {
    props.refetchBoards({ search: value, page: 1 });
    props.onChangeKeyword(value);
  }, 200);

  function onChangeSearchbar(event: ChangeEvent<HTMLInputElement>) {
    getDebounce(event.target.value);
  }

  return <Searchbars01UI onChangeSearchbar={onChangeSearchbar} />;
}
