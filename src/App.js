import Card from "./components/Card";
import CardHolder from "./pages/CardHolder";
import "./App.css";
import Signin from "./pages/sign-in";
import {Routes,Route,BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Signin/> */}
      {/* <CardHolder /> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin/>}></Route>
        <Route path="/Card" element={<CardHolder />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
