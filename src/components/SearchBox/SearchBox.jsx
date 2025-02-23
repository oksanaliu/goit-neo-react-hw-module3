import styles from './SearchBox.module.css';

function SearchBox({ value, onChange }) {
  return (
    <div className={styles.searchBox}>
      <label className={styles.label}>Find contacts by name</label>
      <input
        className={styles.inputSerch}
        type="text"
        placeholder="Enter name"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBox;
