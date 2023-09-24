import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from './components/Main';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
