import React from 'react'
import "./topbar.css"

export default function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topleft">
                    <span className="logo">lamaadmin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <i class="fa-solid fa-bell"></i>
                        <span className="topIconBag">2</span>
                    </div>
                    <div className="topbarIconContainer">
                    <i class="fa-solid fa-globe"></i>
                        <span className="topIconBag">2</span>
                    </div>
                    <div className="topbarIconContainer">
                    <i class="fa-solid fa-gear"></i>
                        <span className="topIconBag">2</span>
                    </div>
                    <img src="https://media.istockphoto.com/id/1431911416/photo/magnolia-blossom.jpg?s=2048x2048&w=is&k=20&c=D76zVVfpvR-5T3NlxwSxCdtLJxS-tOeIKe5RM8_sVW0=" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
