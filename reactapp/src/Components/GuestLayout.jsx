import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/contextprovider";
import { Nav } from "react-bootstrap";

export default function GuestLayout() {
    const { token } = useStateContext();
    if (token) {
        return <Navigate to="/" />;
    }
    return (
        <div>
            <div className="">
                <h1>GuestLayout</h1>
            </div>
            <Outlet />
        </div>
    );
}
