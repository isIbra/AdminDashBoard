import Navbar from "../../component/navbar/Navbar";
import Sidebar from "../../component/sidebar/Sidebar";
import "./new.scss"
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';

const New = () => {
    return (
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>Add new User</h1></div>
                <div className="bottom">
                    <div className="left">
                        <img src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" alt="" />
                    </div>
                    <div className="right">
                        <form>
                            <div className="formInput">
                                <label htmlFor="file">
                                    Image:    <UploadFileOutlinedIcon className="icon" />
                                </label>
                                <input type="file" id="file" style={{ display: "none" }} />
                            </div>
                            <div className="formInput">
                                <label>Username</label>
                                <input type="text" placeholder="obi-wan" />
                            </div>
                            <div className="formInput">
                                <label>Full name</label>
                                <input type="text" placeholder="Obi Wan Kenobi" />
                            </div>
                            <div className="formInput">
                                <label>Email</label>
                                <input type="email" placeholder="obi@test.com" />
                            </div>
                            <div className="formInput">
                                <label>Phone Number</label>
                                <input type="text" placeholder="05xxxxxxxxx" />
                            </div>
                            <div className="formInput">
                                <label>Password</label>
                                <input type="password" />
                            </div>
                            <div className="formInput">
                                <label>Address</label>
                                <input type="text" placeholder="tattione" />
                            </div>
                            <div className="formInput">
                                <label>Country</label>
                                <input type="text" placeholder="outer realem" />
                            </div>
                            <button>SEND</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New;