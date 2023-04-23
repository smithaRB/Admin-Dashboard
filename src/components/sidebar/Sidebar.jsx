import React from 'react';
import "./sidebar.css";
import { Link } from "react-router-dom"


export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/" className='link'>
                        <li className="sidebarListItem">
                            <i class="fa-solid fa-house"><span className='sidebarIcon'>Home</span></i>
                        </li>
                        </Link>
                      
                        <li className="sidebarListItem">
                            <i class="fa-solid fa-bars-staggered"><span className='sidebarIcon'>Analytics</span></i>
                        </li>
                        <li className="sidebarListItem">
                            <i class="fa-solid fa-arrow-trend-up"><span className='sidebarIcon'>Sales</span></i>
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to="/users" className='link'>
                            <li className="sidebarListItem">
                                <i class="fa-solid fa-user"><span className='sidebarIcon'>Users</span></i>
                    </li>
                    </Link>
                    <Link to="/products" className='link'>
                    <li className="sidebarListItem">
                        <i class="fa-solid fa-store"><span className='sidebarIcon'>Products</span></i>
                    </li>
                    </Link>

                    <li className="sidebarListItem">
                        <i class="fa-solid fa-dollar-sign"><span className='sidebarIcon'>Transactions</span></i>
                    </li>
                    <li className="sidebarListItem">
                        <i class="fa-solid fa-bars-staggered"><span className='sidebarIcon'>Report</span></i>


                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <i class="fa-solid fa-envelope"><span className='sidebarIcon'>Mail</span></i>


                    </li>
                    <li className="sidebarListItem">

                        <i class="fa-solid fa-layer-group"><span className='sidebarIcon'>Feedback</span></i>
                    </li>
                    <li className="sidebarListItem">
                        <i class="fa-solid fa-message"><span className='sidebarIcon'>Message</span></i>


                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <i class="fa-solid fa-lock"><span className='sidebarIcon'>Manage</span></i>

                    </li>
                    <li className="sidebarListItem">
                        <i class="fa-solid fa-bars-staggered"><span className='sidebarIcon'>Analytics</span></i>
                    </li>
                    <li className="sidebarListItem">
                        <i class="fa-solid fa-circle-exclamation"><span className='sidebarIcon'>Reports</span></i>
                    </li>
                </ul>
            </div>

        </div>
    </div >
  )
}
