function StudentTable() {
  const students = [
    {
      id: "2025-001",
      name: "Juan Dela Cruz",
      course: "BSIT",
    },
    {
      id: "2025-002",
      name: "Maria Santos",
      course: "BSCS",
    },
  ];

  return (
    <div>
      <h2>Student Table</h2>

      <table border="1" cellPadding="10" width="100%">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Course</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.course}</td>

              <td>
                <button
                  onClick={() => alert("Edit clicked")}
                >
                  Edit
                </button>

                <button
                  onClick={() => alert("Delete clicked")}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;