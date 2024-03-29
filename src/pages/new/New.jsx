import Navbar from "../../component/navbar/Navbar";
import Sidebar from "../../component/sidebar/Sidebar";
import "./new.scss"
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import { useState } from "react";



const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
console.log()

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1></div>
        <div className="bottom">
          <div className="left">
            <img src={file 
              ? URL.createObjectURL(file) 
              : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="" />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image:    <UploadFileOutlinedIcon className="icon" />
                </label>
                <input type="file" id="file" onChange={e=>setFile(e.target.files[0])} style={{ display: "none" }} />
              </div>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <button>SEND</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New;