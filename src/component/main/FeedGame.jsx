import React from 'react'
import "./Feed.css";

import { Avatar } from "@mui/material";

import Post from './Post';
import avatar from '../../images/gaming/Beast Gaming.jpg'
import avatar5 from '../../images/gaming/Xtrovert V2.jpg'
import './Feedvideo.css';

const FeedGame = () => {
  return (
    <div className='feedvideo'>
        <div className="notification">
            <h2> New Videos for you</h2>
        
            <div className="innernot">
                <div className="sidebarRow" style={{margin :0}}>
                    <div className="avatarimg">{<Avatar sx={{width:50,height:50}} src={avatar}/>}</div>
                    <div style={{marginLeft:'10px'}}>
                        <h4 style={{margin: 0}}>BOL has gone live</h4>
                        <h5 style={{margin : 0,fontWeight:100}}> 52 minutes ago </h5>
                    </div>
                </div>
                <div className="sidebarRow" style={{margin :0}}>
                    <div className="avatarimg">{<Avatar sx={{width:50,height:50}} src={avatar5}/>}</div>
                    <div style={{marginLeft:'10px'}}>
                        <h4 style={{margin: 0}}>Check out about what people are talking about</h4>
                        <h5 style={{margin : 0,fontWeight:100}}> about an hour ago </h5>
                    </div>
                </div>
            </div>
        </div>
        <div className='postwidth'>            
            <Post
                key="1"
                profilePic={avatar5}
                message="Free Fire Live Telugu - Munna Bhai is Live - Telugu Gaming Live #MBG"
                timestamp="32m"
                username="Xtrovert V2"  
                iframe="https://www.youtube.com/embed/BgM4BZ-uxg8"
                likes='1'
                sads='1'
                comments='188'
                counts='188'
            />
            <Post
                key="2"
                profilePic={avatar}
                message="Driving Lamborghini In My Room With New Setup 😍 - A_s Gaming"
                timestamp="42m"
                username="Beast Gaming"  
                likes='1'
                loves='1'
                lolx='1'
                comments='15k'
                counts='8k'
                iframe="https://www.youtube.com/embed/6bhS2vfTGGg"
            />
        </div>
    </div>
  )
}

export default FeedGame
