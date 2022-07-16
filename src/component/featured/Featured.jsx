import "./featured.scss"
import MoreVertIcon from "@material-ui/icons/MoreVert";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className="title">Total revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} />
        </div>
        <p className="title">Total sales</p>
        <p className="amount">$420</p>
        <p className="desc">Lorem ipsum dolor</p>
        <div className="summary">
          <div className="item">
            <div className="itemtitle">Target</div>
            <div className="itemResult positive">
              <KeyboardArrowUpIcon fontSize="small"/>
              <div className="resultamount">$66.6k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemtitle">Last week</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultamount">$66.6k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemtitle">Last month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpIcon fontSize="small"/>
              <div className="resultamount">$66.6k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured