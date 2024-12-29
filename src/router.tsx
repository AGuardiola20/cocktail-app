import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Layout from "./layout/Layout";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomeScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
