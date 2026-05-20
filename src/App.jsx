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
      name: "Laila Mea Almanzor",
      course: "BSIT",
    },
    {
      id: "2025-002",
      name: "Joyce Ann Francisco",
      course: "BSCS",
    },
    {
      id: "2025-003",
      name: "Jenna Jaspio",
      course: "BSIT",
    },
    {
      id: "2025-004",
      name: "Glen Lim",
      course: "BSIT",
    },
    {
      id: "2025-005",
      name: "Jed Aeron Torres",
      course: "BSIT",
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