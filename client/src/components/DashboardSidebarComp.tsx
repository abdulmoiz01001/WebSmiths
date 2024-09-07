import { FaTachometerAlt, FaUserMd, FaClipboardList, FaFileMedical, FaUsers } from 'react-icons/fa';
import { ArrowUpLeftSquare } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const DashboardSidebarComp = () => {
    const location = useLocation();
    const pathname = location.pathname;

    return (
        <div className="h-full bg-white transition-all duration-300 flex flex-col gap-20 justify-start w-[20%]">
            <div className="w-full mt-10 bg-white flex flex-col justify-start">
                
                {/* Statics */}
                <Link to="statistics">
                    <li className={`h-16 w-full hover:bg-gray-100 flex items-center gap-3 pl-4 ${pathname === '/statistics' ? 'border-r-4 bg-gray-100 border-black' : ''} hover:border-r-4 hover:border-black`}>
                        <FaTachometerAlt className="text-black" size={20} />
                        <h1>Statistics</h1>
                    </li>
                </Link>
                
                {/* Doctors */}
                <Link to="doctors">
                    <li className={`h-16 w-full hover:bg-gray-100 flex items-center gap-3 pl-4 ${pathname === '/doctors' ? 'border-r-4 bg-gray-100 border-black' : ''} hover:border-r-4 hover:border-black`}>
                        <FaUserMd className="text-black" size={20} />
                        <h1>Doctors</h1>
                    </li>
                </Link>

                {/* Patients */}
                <Link to="patients">
                    <li className={`h-16 w-full hover:bg-gray-100 flex items-center gap-3 pl-4 ${pathname === '/patients' ? 'border-r-4 bg-gray-100 border-black' : ''} hover:border-r-4 hover:border-black`}>
                        <FaUsers className="text-black" size={20} />
                        <h1>Patients</h1>
                    </li>
                </Link>
                
                {/* Appointments */}
                <Link to="appointments">
                    <li className={`h-16 w-full hover:bg-gray-100 flex items-center gap-3 pl-4 ${pathname === '/appointments' ? 'border-r-4 bg-gray-100 border-black' : ''} hover:border-r-4 hover:border-black`}>
                        <FaClipboardList className="text-black" size={20} />
                        <h1>Appointments</h1>
                    </li>
                </Link>
                
                {/* Registration Requests */}
                <Link to="registration-requests">
                    <li className={`h-16 w-full hover:bg-gray-100 flex items-center gap-3 pl-4 ${pathname === '/registration-requests' ? 'border-r-4 bg-gray-100 border-black' : ''} hover:border-r-4 hover:border-black`}>
                        <FaUsers className="text-black" size={20} />
                        <h1>Registration Requests</h1>
                    </li>
                </Link>

                {/* Medical Records */}
                <Link to="medical-records">
                    <li className={`h-16 w-full hover:bg-gray-100 flex items-center gap-3 pl-4 ${pathname === '/medical-records' ? 'border-r-4 bg-gray-100 border-black' : ''} hover:border-r-4 hover:border-black`}>
                        <FaFileMedical className="text-black" size={20} />
                        <h1>Medical Records</h1>
                    </li>
                </Link>

                {/* Back Button */}
                <div onClick={() => window.history.back()} className="w-12 mt-40 h-12 ml-4 cursor-pointer active:scale-95 flex justify-center items-center rounded-xl bg-gray-100">
                    <ArrowUpLeftSquare size={30} />
                </div>
            </div>
        </div>
    );
}

export default DashboardSidebarComp;
