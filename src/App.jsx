import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./views/app/index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App
