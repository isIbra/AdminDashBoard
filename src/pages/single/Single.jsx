import "./single.scss"
import Sidebar from "../../component/sidebar/Sidebar";
import Navbar from "../../component/navbar/Navbar";

const Single = () => {
    return (
        <div className="single">
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h1 className="title">information</h1>
                        <div className="item">
                            <img
                                src="https://i1.sndcdn.com/artworks-000494838255-ymdgd8-t500x500.jpg"
                                alt=""
                                className="itemImg" />
                            <div className="details">
                                <h1 className="itemtitle">Obi wan</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email:</span>
                                    <span className="itemValue">Obi.wan@starwars.com</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Phone:</span>
                                    <span className="itemValue">+966 111111</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Address:</span>
                                    <span className="itemValue">1123 1422 kaws dist</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Country:</span>
                                    <span className="itemValue">Tattione</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right"></div>
                </div>
                <div className="bottom"></div>
            </div>
        </div>
    )
}

export default Single;