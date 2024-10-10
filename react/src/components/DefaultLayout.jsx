import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
    return (
        <div>
            DEfault
            <Outlet />
        </div>
    )
}