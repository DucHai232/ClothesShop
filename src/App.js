import "./App.css";
import About from "./components/Clothes/About";
import Bottom from "./components/Clothes/Bottom";
import Cart from "./components/Clothes/Cart";
import Top from "./components/Clothes/Top";
import UniformPrice from "./components/Clothes/UniformPrice";
import BottomDetail from "./components/ClothesDetail/BottomDetail";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Container } from "@mui/system";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Routes>
          <Route path="/Bottom" element={<Bottom />} exact={true} />
          <Route path="/Top" element={<Top />} exact={true} />
          <Route path="/About" element={<About />} exact={true} />
          <Route path="/Cart" element={<Cart />} exact={true} />
          <Route
            path="/Uniform-price"
            element={<UniformPrice />}
            exact={true}
          />
          <Route path="/Bottom/:id" element={<BottomDetail />} exact={true} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
