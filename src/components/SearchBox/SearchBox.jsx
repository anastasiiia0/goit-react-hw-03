import css from './SearchBox.module.css';

export default function SearchBox({ value, onFilter }) {
  return (
    <div className={css.searchBox}>
      <p className={css.searchBoxText}>Find contacts by name</p>
      <input
        type="text"
        className={css.searchBoxInput}
        value={value}
        onChange={e => onFilter(e.target.value)}
      />
    </div>
  );
}
