import './App.css';
import About from "./pages/About";
import Home from "./pages/Home";
import {NavLink, Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <h1>React Demo</h1>
            <NavLink to={"/home"}>Home</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <div>
                <Routes>
                    <Route path={"/home"} element={<Home/>}></Route>
                    <Route path={"/about"} element={<About/>}></Route>
                </Routes>
            </div>
        </div>
    );
}


export default App;
