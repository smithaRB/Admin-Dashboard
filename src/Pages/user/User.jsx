import "./user.css";
import {Link} from "react-router-dom";

export default function User() {
    return (
        <div className='user'>
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser" >
                <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80" alt="" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Anna Becker</span>
                            <span className="userShowUserTitle">software Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <span className="userShowIcon"><i class="fa-regular fa-user"></i></span>
                            <span className="userShowInfoTitle">annabeck99</span>
                        </div>
                        <div className="userShowInfo">
                            <span className="userShowIcon"><i class="fa-regular fa-calendar"></i></span>
                            <span className="userShowInfoTitle">10.12.1999</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <span className="userShowIcon"><i class="fa-solid fa-mobile-screen-button"></i></span>
                            <span className="userShowInfoTitle">+1 123 456 67</span>
                        </div>
                        <div className="userShowInfo">
                            <span className="userShowIcon"><i class="fa-solid fa-envelope-circle-check"></i></span>
                            <span className="userShowInfoTitle">annabeck99@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <span className="userShowIcon"><i class="fa-solid fa-location-dot"></i></span>
                            <span className="userShowInfoTitle">New york| USA</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form  className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label className="userUpdateLabel">Username</label>
                                <input type="text" placeholder="annabeck99" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label className="userUpdateLabel">Full Name</label>
                                <input type="text" placeholder="Anna Becker" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label className="userUpdateLabel">Email</label>
                                <input type="text" placeholder="annabeck99@gmail.com" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label className="userUpdateLabel">Phone</label>
                                <input type="text" placeholder="1 123 456 67" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label className="userUpdateLabel">Address</label>
                                <input type="text" placeholder="New york| USA" className="userUpdateInput" />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img className="userUpdateImg" src="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80" alt="" />
                                <label htmlFor="file"><span className="userUpdateIcon"><i class="fa-solid fa-arrow-up-from-bracket"></i></span></label>
                                <input type="file" id="file" style={{display:"none"}}/>
                            </div>
                            
                            <button className="userUpdateButton">Update</button>

                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}
