import { Outlet } from "react-router-dom";

export default function Users() {
    return (
        <div>
            <div className="">
                <h1>Users</h1>
            </div>
            <Outlet />
        </div>
    );
}
