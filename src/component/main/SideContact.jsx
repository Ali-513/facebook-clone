import React from 'react'
import VideoCallIcon from '@mui/icons-material/VideoCall';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SearchIcon from '@mui/icons-material/Search';
import './sidecontact.css';
import {names} from "./names";

import SidebarRow from './SidebarRow';


const SideContact = ({toggle, setToggle, setTitle, setAvatar}) => {
    function importAll(r)
    {
        return r.keys().map(r);
    }

    
    const images = importAll(require.context('../../images/',false,/\.(png|jpe?g|svg)$/))
  return (
    <div className='bg-grey'>
        <div className="blocking">
            <div className="firstrow">
                <div className="contacts">
                    <h2 style={{color : "#05050580",fontSize:"1.2rem",fontWeight:"600"}}>Contacts</h2>
                </div>
                <div className="buttons">
                    <VideoCallIcon className='item-margin' sx={{ color:'#05050580;', fontSize:22 ,margin:"0 10px" }}  />     
                    <SearchIcon sx={{ color:'#05050580;', fontSize:22,margin:"0 10px" }} />
                    <MoreHorizIcon sx={{ color:'#05050580;', fontSize:22 ,margin:"0 10px"}}/>
                </div>
            </div>
        </div>
        <div className="secondrow" >
            {
                
                images.map((item,index)=> (
                <SidebarRow src={item} toggle={toggle} setToggle={setToggle} title={names.names[index]}  setTitle={setTitle}  setAvatar={setAvatar}   />
                ))
                
            }
        </div>
    </div>
    
  )
}

export default SideContact
