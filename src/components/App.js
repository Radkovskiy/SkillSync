import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Todos from "./todos/Todos";
import Contacts from "./contacts/Contacts";
import Counter from "./counter/Counter";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path='todos' element={<Todos />} />
        <Route path='contacts' element={<Contacts />} />
        <Route path='counter' element={<Counter />} />
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