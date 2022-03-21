import logo from "./logo.svg";
import "./App.css";
import TopbarComponent from "./components/topbar/Topbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactComponent from "./components/contactComponent/ContactComponent";
import AboutMeComponent from "./components/aboutMeComponent/AboutMeComponent";
import HomePageComponent from "./components/homePageComponent/HomePageComponent";
import ReactDOM from 'react-dom';
import JobHistoryComponent from "./components/jobHistory/JobHistoryComponent";
import SchoolHistoryComponent from "./components/schoolHistoryComponent/schoolHistoryComponent";

function App() {
  return (
    <div>
    <TopbarComponent></TopbarComponent>

    <BrowserRouter>
      <Routes>
        <Route exact  path="/" element={<HomePageComponent />}/>
          <Route exact  path="about" element={<AboutMeComponent />} />
          <Route exact  path="contact" element={<ContactComponent />} />
          <Route exact  path="job" element={<JobHistoryComponent />} />
          <Route exact  path="school" element={<SchoolHistoryComponent />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
