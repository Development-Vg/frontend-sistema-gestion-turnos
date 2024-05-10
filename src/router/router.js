import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "../components/login/login";
import Registry from '../components/registry/registry';
import Home from '../components/home/home';

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/registry" element={<Registry />} />
                <Route path="/home" element={<Home/>} />
                <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;