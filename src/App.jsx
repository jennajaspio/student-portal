import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import SearchBar from "./components/SearchBar";
import StudentTable from "./components/StudentTable";
import StudentForm from "./components/StudentForm";

function App() {
  return (
    <div style={{ display: "flex", fontFamily: "Arial" }}>
      <Sidebar />

      <div style={{ flex: 1, padding: "20px" }}>
        <Header />
        <Dashboard />
        <SearchBar />
        <StudentTable />
        <StudentForm />
      </div>
    </div>
  );
}

export default App;