import styles from './SearchBox.module.css';

function SearchBox({ value, onChange }) {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Find contacts by name"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default SearchBox;
