import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Logout = () => {
const { handleLogOut } = useAuth();

return (
    <Link onClick={handleLogOut} to={"/"}>Logga ut</Link>
);
};

export default Logout;