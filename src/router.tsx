import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Layout from "./layout/Layout";
import FavoriteScreen from "./screens/FavoriteScreen";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomeScreen />} index />
          <Route path="/favoritos" element={<FavoriteScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
