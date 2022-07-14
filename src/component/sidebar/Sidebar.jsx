import "./sidebar.scss"


const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <span className="logo">Yowmi</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <li>
                       
                        <span>Dashboard</span></li>
                </ul>
                <ul>
                    <li><span>Dashboard</span></li>
                </ul>
                <ul>
                    <li><span>Dashboard</span></li>
                </ul>
                <ul>
                    <li><span>Dashboard</span></li>
                </ul>
            </div>
            <div className="bottom">color option</div>
        </div>
    )
}

export default Sidebar;