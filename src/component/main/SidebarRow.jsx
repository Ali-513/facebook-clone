import React from 'react';
import "./SidebarRow.css";
import {Avatar} from '@mui/material';


function SidebarRow({src, Icon ,title, toggle, setToggle, setTitle,setAvatar,nobadge,Comp}) {

    const handleClick = () => {
        if(setTitle) setTitle(title);  // Updates the title in `Widgets`
        if(setAvatar) setAvatar(src);   // Updates the avatar in `Widgets`
        if(setToggle) setToggle(!toggle);  // Opens the chat card
    };

    return (
        <div className="sidebarRow nobadge"  onClick={handleClick}>
          
           {src ? <div className='avatarimg'><div><Avatar  sx={{ width: 35, height: 35 }} src={src}/>{nobadge?null:<div className='badge'></div>}</div></div>:null} 
            {Icon && <img className='icon' src={Icon} alt="" />}
            <h4 >{title}</h4>
        </div>
    )
}

export default SidebarRow
