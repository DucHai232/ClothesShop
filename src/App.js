import "./App.css";
import Bottom from "./components/Clothes/Bottom";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/Bottom" element={<Bottom />} exact={true} />
      </Routes>
    </div>
  );
}

export default App;
