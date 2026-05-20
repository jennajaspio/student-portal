function SearchBar() {
  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Search student..."
        style={{
          padding: "10px",
          width: "300px",
        }}
      />
    </div>
  );
}

export default SearchBar;