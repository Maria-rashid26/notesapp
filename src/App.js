import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Notescontent from "./components/Notescontent";
import NotesForm from "./components/NotesForm";
import Edit from "./components/Edit";


function App() {
  return (
    <div className="h-screen w-full absolute inset-0">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Notescontent />} />
          <Route path="/NotesForm" element={<NotesForm />} />
          <Route path="/Edit/:id" element={<Edit />} />
   
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
