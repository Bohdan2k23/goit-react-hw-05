import css from "./SearchBar.module.css";


type Props = {
  onSearch: (str: string) => void;
  onChange: (str: string) => void;
  value: string;
}

export default function SearchBar({ onSearch, value, onChange }: Props) {

  return (
    <header>
        <input
          className={css.input}
          type="text"
          value={value}
          onChange={e => onChange(e.currentTarget.value)}
          onKeyDown={e => e.key == "Enter" && onSearch(value)}
          autoComplete="off"
          autoFocus
          placeholder="shrek"
        />
        <button type="submit" className={css.btn} onClick={() => onSearch(value)}>
          Search
        </button>
    </header>
  );
}
