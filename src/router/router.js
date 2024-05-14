import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Registry from '../components/registry/registry';
import Home from "../components/home/home";

import ModalRegister from "../components/login/login";
import HomeAdmin from "../components/homeAdmin/homeAdmin";


function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<ModalRegister />} />
                <Route path="/home" element={<Home />} />
                <Route path="/homeadmin" element={<HomeAdmin />} />
                {/* <Route path="/registry" element={<Registry />} /> */}
                {/* <Route path="*" element={<Navigate to="/login" />} /> */}
            </Routes>
        </Router>
    );
}







export default AppRouter;