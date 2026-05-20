function Dashboard() {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        marginTop: "20px",
        marginBottom: "20px",
      }}
    >
      <div style={cardStyle}>
        <h3>500</h3>
        <p>Total Students</p>
      </div>

      <div style={cardStyle}>
        <h3>20</h3>
        <p>Courses</p>
      </div>

      <div style={cardStyle}>
        <h3>150</h3>
        <p>Enrolled</p>
      </div>
    </div>
  );
}

const cardStyle = {
  background: "#ecf0f1",
  padding: "20px",
  width: "150px",
  borderRadius: "10px",
};

export default Dashboard;