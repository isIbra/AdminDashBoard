import "./sidebar.scss"
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import CategoryOutlinedIcon from '@material-ui/icons/CategoryOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import InsertChartOutlinedIcon from '@material-ui/icons/InsertChartOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import AddToQueueOutlinedIcon from '@material-ui/icons/AddToQueueOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import CalendarViewDayOutlinedIcon from '@material-ui/icons/CalendarViewDayOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';


const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <span className="logo">Yowmi</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardOutlinedIcon className="icon" />
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>
                    <li>
                        <PeopleOutlineIcon className="icon" />
                        <span>Users</span>
                    </li>
                    <li>
                        <CategoryOutlinedIcon className="icon" />
                        <span>Products</span>
                    </li>
                    <li>
                        <LocalMallOutlinedIcon className="icon" />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingOutlinedIcon className="icon" />
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                        <InsertChartOutlinedIcon className="icon" />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsNoneOutlinedIcon className="icon" />
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <AddToQueueOutlinedIcon className="icon" />
                        <span>System Health</span>
                    </li>
                    <li>
                        <CalendarViewDayOutlinedIcon className="icon" />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsOutlinedIcon className="icon" />
                        <span>Settings</span>
                    </li>
                    <p className="title">USERS</p>
                    <li>
                        <AccountCircleOutlinedIcon className="icon" />
                        <span>Profile</span>
                    </li>
                    <li>
                        <ExitToAppOutlinedIcon className="icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOpt"></div>
                <div className="colorOpt"></div>
            </div>
        </div>
    )
}

export default Sidebar;