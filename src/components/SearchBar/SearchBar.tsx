import css from "./SearchBar.module.css";

type Props = {
  onSearch: (str: string) => void;
  onChange: (str: string) => void;
  value: string;
};

export default function SearchBar({ onSearch, value, onChange }: Props) {
  return (
    <div className={css.bar}>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
        onKeyDown={(e) => e.key == "Enter" && onSearch(value)}
        autoComplete="off"
        autoFocus
        placeholder="Search..."
      />
      <button type="submit" className="btn" onClick={() => onSearch(value)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-search"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </button>
    </div>
  );
}
