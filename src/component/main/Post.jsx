import React from 'react'
import "./Post.css";
import {Avatar} from "@mui/material";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NearMeIcon from "@mui/icons-material/NearMe";
import {ExpandMoreOutlined} from "@mui/icons-material";
import like from "../../images/reactions/like.svg";
import sad from "../../images/reactions/sad.svg";
import love from "../../images/reactions/love.svg";
import haha from "../../images/reactions/haha.svg";
import PublicRoundedIcon from '@mui/icons-material/PublicRounded';
import avatar from '../../images/avatar.jpg'
function Post ({profilePic, image, username, timestamp, message,video,likes,sads,loves,lolx,comments,counts,iframe})  {
  return (
    
    <div className="post">
        <div className="post_top">
            <Avatar src={profilePic} className='post_avatar'/>
            <div className="post_topInfo">
                <h3>{username}</h3>
                <p>{timestamp} <span> . </span><PublicRoundedIcon sx={{fontSize:'15px'}}/></p> 
                
            </div>
            </div>
            <div className="post_bottom">
                <p>{message}</p>
            </div>

            <div className="post_image">
                {image?<img src={image} alt=""/>:null}  
                {video? <video controls src={video} width="600" autoplay="true" class="sc-1u8a9mw-2 bDuUfp"></video>:null}
                {iframe? <iframe width="800" height="450" src={iframe} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>:null}            
            </div>
            <div className="reaction-containe">
                <div className="reactions">
                    <div className="reaction-icons">
                        {likes? <div className='first'> <img src={like} alt="like" class="sc-1rfu1tx-0 Lrwrv"/> </div>:null}
                        {sads? <div className='second'> <img src={sad} alt="sad" class="sc-1rfu1tx-0 Lrwrv"/> </div>:null}
                        {loves? <div className='second'> <img src={love} alt="sad" class="sc-1rfu1tx-0 Lrwrv"/> </div>:null}
                        {lolx? <div className='second'> <img src={haha} alt="sad" class="sc-1rfu1tx-0 Lrwrv"/> </div>:null}
                    </div>
                    <span className='count'>{counts}</span>

                </div>
                <div className="comments">
                        <span className=''>{comments}  Comments</span>
                    </div>
            </div>
            <div className="post_options">
                <div className="post_option">
                    <ThumbUpIcon/>
                    <p>Like</p>
                </div>
                <div className="post_option">
                    <ChatBubbleOutlineIcon/>
                    <p>Comment</p>
                </div>
                <div className="post_option">
                    <i className='share icon'></i>
                    <p>Share</p>
                </div>
                <div className="post_option">
                    <AccountCircleIcon/>
                    <ExpandMoreOutlined/>
                </div>
                
            </div>
            <div className="messageSender_top">
                    <Avatar src={avatar}/>
                    <input type='text' class="messageSender_input" placeholder="Write a comment..." ></input>
                   

                
            </div>
    </div>

      
    
  )
}

export default Post
