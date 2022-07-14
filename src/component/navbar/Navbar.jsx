import "./navbar.scss"
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import NightsStayOutlinedIcon from '@material-ui/icons/NightsStayOutlined';
import FullscreenExitOutlinedIcon from "@material-ui/icons/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@material-ui/icons/ListOutlined";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search..." />
                    <SearchOutlinedIcon />
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageOutlinedIcon className="icon"/>
                        English
                    </div>
                    <div className="item">
                        <NightsStayOutlinedIcon className="icon"/>
                    </div>
                    <div className="item">
                        <FullscreenExitOutlinedIcon className="icon"/>
                    </div>
                    <div className="item">
                        <NotificationsNoneOutlinedIcon className="icon"/>
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineOutlinedIcon className="icon"/>
                    </div>
                    <div className="item">
                        <ListOutlinedIcon className="icon"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar