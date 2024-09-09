import React from 'react'
import './msgcard.css';
import CloseIcon from '@mui/icons-material/Close';
import SidebarRow from "./SidebarRow";
import {names} from "./names";
const MsgCard = ({toggle, setToggle}) => {
    function importAll(r) {
        return r.keys().map(r);
      }
  
      const images = importAll(require.context('../../images/', false, /\.(png|jpe?g|svg)$/));
  return (
    <div className='msgcardcontainer'>
        <div className="msgheadercontainer">
            <div className="msgcardheader">
                <h3>New message</h3>
                <button onClick={()=>setToggle(!toggle)}><CloseIcon sx={{fontSize:25}} /></button>
            </div>
            <div className="msgcardrecipent">
                <label>To:</label> <input />
            </div>
        </div>
        <div className="msgcardmain">
            <div className="suggested">
                <h2>Suggested</h2>
            </div>
            <div className="friends">
            {
                images.map((item,index)=>(
          
                <SidebarRow src={item} title={names.names[index]}/>
                ))  
            }
            </div>
        </div>
    </div>
  )
}

export default MsgCard
