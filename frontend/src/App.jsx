import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NoteDetailPage from "./pages/NoteDetailPage";
// import toast from "react-hot-toast";

const App = () => {
  return (
    <div data-theme="forest" className="p-4">
      {/* <button
        className="text-red-500 p-4 bg-blue-200 rounded-lg"
        onClick={() => toast.success("Successfully toasted!")}
      >
        Click Me
      </button> */}
      {/* <button className="btn btn-outline">Daisu UI </button> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
