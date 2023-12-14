import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";

export default function MainRoutes() {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/store" element/>
        <Route path="/orders" element/>
        <Route path="/analytics" element/>
    </Routes>
  )
}
