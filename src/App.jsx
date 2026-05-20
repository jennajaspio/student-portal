import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import StudentTable from "./components/StudentTable";
import StudentForm from "./components/StudentForm";

function App() {
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
    <div className="container">
      <Sidebar />

      <div className="content">
        <Header />

        <div className="page-content">
          <Dashboard />
          <StudentTable students={students} />
          <StudentForm />
        </div>
      </div>
    </div>
  );
}

export default App;