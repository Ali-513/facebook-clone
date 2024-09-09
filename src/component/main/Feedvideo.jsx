import React, {useEffect, useState} from 'react';
import "./Feed.css";
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import { Avatar } from "@mui/material";
import avatar2 from '../../images/avatar2.jpg';
import avatar3 from '../../images/avatar3.jpg';
import avatar4 from '../../images/avatar4.jpg';
import post1 from '../../images/post/post1.jpg';
import post2 from '../../images/post/post2.webp';
import post3 from '../../images/post/post3.jpg';
import Post from './Post';
import avatar from '../../images/pages/BOL.jpg'
import avatar5 from '../../images/pages/Daily Pakistan.jpg'
import './Feedvideo.css';
import SidebarRow from './SidebarRow';

function Feedvideo() {

    // to keep track of the post
    

    

    return (
        <div className="feedvideo">
      
            <div className='notification'>

            <h2>New Videos for You. 2</h2>
            <div className='innernot'>
            <div className="sidebarRow" style={{margin:0}}>
          <div className='avatarimg'>{<Avatar  sx={{ width: 50 , height: 50 }} src={avatar}/>}</div> 
         
            <div style={{marginLeft:'10px'}}>
            <h4  style={{margin:0}}>BOL has gone live.</h4>
            <h5 style={{margin:0,fontWeight:100}}>52 minutes ago</h5>
            </div>
            </div>
            
            <div className="sidebarRow" style={{margin:0}}>
          <div className='avatarimg'>{<Avatar  sx={{ width:50 , height:50 }} src={avatar5}/>}</div> 
         
            <div style={{marginLeft:'10px'}}>
            <h4  style={{margin:0}}>Check out videos people are talking about.</h4>
            <h5 style={{margin:0,fontWeight:100}}>about an hour ago</h5>
            </div>
            </div>
            
            </div>
            </div>


        <div className='postwidth'>            
        <Post
            key="1"
            profilePic={avatar5}
            message="Nauman Ejaz ko adakari chor deni chahey Adakar Yasir Hussain ne nai behes cheir di"
            timestamp="32m"
            username="Daily Pakistan"  
            iframe="https://www.youtube.com/embed/UcQLX5T0ORY"
            likes='1'
            sads='1'
            comments='188'
            counts='188'

            />

<Post
            key="2"
            profilePic={avatar}
            message="Shakti Kapoor Son Siddhanth Released On Bail | Bollywood News | BOL Entertainment"
            timestamp="42m"
            username="BOL Network"  
            likes='1'
            loves='1'
            lolx='1'
            comments='15k'
            counts='8k'
            iframe="https://www.youtube.com/embed/cV_2FjiXIic"
            />





            
            
            </div>

        </div>
    )
}

export default Feedvideo;
