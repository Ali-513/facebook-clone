import React from 'react';
import "./Story.css";
import {Avatar} from "@mui/material";
import avatar from '../../images/avatar.jpg'
import './sstory.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';


function SStory({image, profileSrc, title}) {
    return (




        <div style={{ backgroundImage: `url(${avatar})`,backgroundSize:"100% 75%" }} className="sstory">
            <div className="sstory_avatar" ><AddCircleIcon sx={{fontSize:'40px',backgoundColor:'white',color:'#1877F2'}}/></div>
           <div className='cen'>
            <h5>Create story</h5>
            </div>
            {/* For background images in Stories we go to the StoryReels.js*/}
        </div>
    )
}

export default SStory
