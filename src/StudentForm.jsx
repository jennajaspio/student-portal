function StudentForm() {
  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Add Student</h2>

      <input
        type="text"
        placeholder="Student Name"
        style={inputStyle}
      />

      <br />

      <input
        type="text"
        placeholder="Course"
        style={inputStyle}
      />

      <br />

      <button
        onClick={() => alert("Student Added")}
      >
        Submit
      </button>
    </div>
  );
}

const inputStyle = {
  padding: "10px",
  width: "300px",
  marginBottom: "10px",
};

export default StudentForm;