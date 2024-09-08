import './App.css'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline"
import TodoList from './TodoList'
import Navbar from './NavBar'

export function Index() {
  return (
    <>
      <div>首頁 路徑是 /</div>
      <img src={`${import.meta.env.VITE_BASENAME}/1.jpg`} alt="" />
    </>
  );
}
export function Page2() {
  return (
    <>
      <div>Page2 路徑是 Page2</div>
      <img src={`${import.meta.env.VITE_BASENAME}/2.jpg`} alt="" />
    </>
  );
}

function App() {
  return (
    <>
      <BrowserRouter basename="/test-vite-github-pages">
        <nav>
          <ul>
            <li>
              <Link to="/">page /</Link>
            </li>
            <li>
              <Link to="/page2">page2</Link>
            </li>
          </ul>
        </nav>
      </BrowserRouter>
      <Navbar />
      <CssBaseline/>
      <TodoList/>
    </>
  )
}

export default App
