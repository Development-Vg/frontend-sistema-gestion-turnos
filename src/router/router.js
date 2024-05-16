import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "../components/home/home";
import ModalRegister from "../components/login/login";
import HomeAdmin from "../components/homeAdmin/homeAdmin";
import Shift from "../components/Shift/createShift";
import Dependence from "../components/Shift/dependence";


function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<ModalRegister />} />
                <Route path="/home" element={<Home />} />
                <Route path="/shift" element={<Shift />} />
                <Route path="/homeadmin" element={<HomeAdmin />} />
                <Route path="/dependence" element={<Dependence />} />
                {/* <Route path="/registry" element={<Registry />} /> */}
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </Router>
    );
}







export default AppRouter;