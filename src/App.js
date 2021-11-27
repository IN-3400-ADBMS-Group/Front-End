import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import LandingScreen from "./Pages/LandingScreen";
import PersonForm from "./Pages/PersonForm";
import PersonListPage from "./Pages/PersonListPage";
import SinglePerson from "./Pages/SinglePerson";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <CssBaseline />

      <Routes>
        <Route path="/" exact element={<LandingScreen />} />
        <Route path="/form" element={<PersonForm />} />
        <Route path="/person/:id" element={<SinglePerson />} />
        <Route path="/persons" element={<PersonListPage />} />
      </Routes>
    </>
  );
}

export default App;
