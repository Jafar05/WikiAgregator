import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
// import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Saga from "./components/Saga/Saga";
import Todo from "./components/Todo/Todo";

function App() {
  return (
      <>
      <Navbar/>
        <main className='container my-5'>
        <Routes>
            <Route path="/saga" element={<Saga/>}/>
            <Route path="/thunk" element={<Header/>}/>
            <Route path="/todo" element={<Todo/>}/>
        </Routes>
        </main>
      </>
  );
}

export default App;
