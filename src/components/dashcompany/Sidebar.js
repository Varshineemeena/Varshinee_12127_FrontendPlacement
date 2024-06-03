import React from 'react'
import
{ BsGrid1X2Fill, BsPeopleFill} from 'react-icons/bs';
 import { FaBuildingUser } from "react-icons/fa6";
 import { GrUserAdmin } from "react-icons/gr";
 import { HiNewspaper } from "react-icons/hi2";
 import { GiPapers } from "react-icons/gi";
 import { IoLogOut } from "react-icons/io5";

function Sidebar({openSidebarToggle, OpenSidebar}) {
    const sessionId = sessionStorage.getItem("userId");

    console.log(sessionId)
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <GrUserAdmin  className='icon_header'/> PLACEMENT
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href={`/profileCompany/${sessionId}`}>
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href={`/jobviewcompany/${sessionId}`}>
                    <HiNewspaper className='icon'/> Jobs
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/applicationview">
                    <GiPapers className='icon'/> Applications
                </a>
            </li>

            <li className='sidebar-list-item'>
                <a href="/loginstudent">
                    <IoLogOut className='icon'/> Logout
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar
