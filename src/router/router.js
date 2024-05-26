import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "../components/home/home";
import ModalRegister from "../components/login/login";
import HomeAdmin from "../components/homeAdmin/homeAdmin";
import Shift from "../components/Shift/createShift";
import ReShift from "../components/CreateShift/RegistryShit";
import Dependence from "../components/Shift/dependence";
import HomeSG from "../components/HomeSG/HomeSG";
import ShiftHistory from "../components/shiftHistory/shiftHistory";





function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<ModalRegister />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shift" element={<Shift />} />
        <Route path="/Reshift" element={<ReShift />} />
        <Route path="/homeadmin" element={<HomeAdmin />} />
        <Route path="/dependence" element={<Dependence />} />
        <Route path="/homeSG" element={<HomeSG />} />
        <Route path="/ShiftHistory" element={<ShiftHistory/>} />
        <Route path="*" element={<Navigate to="/homeSG" />} />
      </Routes>
    </Router>
  );
}







export default AppRouter;