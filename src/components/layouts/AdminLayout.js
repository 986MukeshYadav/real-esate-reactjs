import { Link, Outlet } from 'react-router-dom';
import { FaUser, FaHome } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { GrServices } from "react-icons/gr";

export const AdminLayout = () => {
    return (
        <>
            <header className="bg-gray-800 text-white">
                <div className="container mx-auto">
                    <nav>
                        <ul className="flex items-center">
                            <li className="mr-4">
                                <Link to="/admin/users" className="flex items-center"><FaUser className="mr-2" /> Users</Link>
                            </li>
                            <li className="mr-4">
                                <Link to="/admin/contacts" className="flex items-center"><FaMessage className="mr-2"/> Contacts</Link>
                            </li>
                            <li className="mr-4">
                                <Link to="/admin/services" className="flex items-center"><GrServices className="mr-2"/> Services</Link>
                            </li>
                            <li>
                                <Link to="/" className="flex items-center" ><FaHome className="mr-2"/>Home</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <Outlet />
        </>
    );
};

export default AdminLayout;
