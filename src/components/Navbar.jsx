'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiAlarmOn, CiHome } from "react-icons/ci";
import { FaChartLine } from "react-icons/fa";




const Navbar = () => {

    const pathname = usePathname();
    console.log(pathname);
    const links = <>

        <li><Link className={pathname === '/' ? 'text-blue-400' : ''} href="/"><CiHome />Home</Link></li>
        <li><Link className={pathname === '/timeline' ? 'text-blue-400' : ''} href="/timeline"><CiAlarmOn />Timeline</Link></li>
        <li><Link className={pathname === '/stats' ? 'text-blue-400' : ''} href="/stats"><FaChartLine />Stats</Link></li>
        

    </>

    return (
        <div className="navbar bg-base-100 shadow-sm justify-between">
            <div className="navbar-start ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}

                    </ul>
                </div>
                <Link href="/" className="btn btn-ghost text-xl"><h1><span className="font-bold">Keen</span>Keeper</h1></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
          
        </div>
    );
};

export default Navbar;