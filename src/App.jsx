import { Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import SupplyList from "./pages/SupplyList";
import "./App.css";
import StockTracker from "./pages/StockTracker";
import StockTrackerN from "./pages/StockTrackerN";
import Footer from "./component/Footer";
function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <SupplyList />
            <Footer/>
          </>
        }
      />
      <Route
        path="/supplyList"
        element={
          <>
            <Header />
            <SupplyList />
            <Footer/>
          </>
        }
      />
      <Route
        path="/stockTracker/"
        element={
          <>
            <Header />
            <StockTrackerN />
            <Footer/>
          </>
        }
      />
      <Route
        path="/stockTracker/:id"
        element={
          <>
            <Header />
            <StockTracker />
            <Footer/>
          </>
        }
      />
    </Routes>
  );
}

export default App;
