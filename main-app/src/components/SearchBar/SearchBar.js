import Input from "../Input/Input";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles/search.module.css";

export default function SearchBar(props) {
  return (
    <Input
      className={styles.search_input_group}
      type="search"
      placeholder="Search"
      inputClass={styles.search_input}
      iconboxClass={styles.search_input_icon}
      onChange={props.onChange}
      value={props.query}
      icon={faSearch}
    />
  );
}
