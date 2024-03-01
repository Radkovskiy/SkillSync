import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Todos from "../pages/Todos";
import Contacts from "../pages/Contacts";
import BackEnd from "../pages/BackEnd";

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path='todos' element={<Todos />} />
        <Route path='contacts' element={<Contacts />} />
        {/* <Route path='backend' element={<BackEnd />} /> */}
      </Route>
    </Routes>
  );
}

export default App;

/* 
Todos
Contacts
Counter
*/