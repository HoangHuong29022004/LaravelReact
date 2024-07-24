import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/contextprovider";
import { Nav } from "react-bootstrap";

export default function DefaultLayout() {
    const { user, token } = useStateContext();
    if (!token) {
        return <Navigate to="/login" />;
    }
    return (
        <div id="defaultLayout">
            <div className="content">
                <header>
                    <div className="">header</div>
                    <div className="">user</div>
                </header>
            </div>
            <main>
                <Outlet />
            </main>
        </div>
    );
}
