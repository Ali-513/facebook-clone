import React, { useState } from 'react';
import "./MessageSender.css";
import {Avatar} from "@mui/material";

import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import Box from '@mui/material/Box';
import avatar from '../../images/avatar.jpg';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import Modal from '@mui/material/Modal';
import PublicIcon from '@mui/icons-material/Public';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import VideoCallIcon from '@mui/icons-material/VideoCall';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MoodIcon from '@mui/icons-material/Mood';
import MicNoneIcon from '@mui/icons-material/MicNone';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
export default function MessageSender() {
    const [open,setOpen]=useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <div className='messageSender'>
      <div className="messageSender_top">
        <Avatar src={avatar}/>
        <form >
        <input onClick={handleOpen} className='messageSender_input' placeholder="What's on your mind, ?"/>
        </form>
      </div>
      <div className="messageSender_bottom">
        <div className="messageSender_option">
          <VideocamIcon sx={{ fontSize: 28 }}  style={{color:"red"}}/>
          <h3>Live Video</h3>
        </div>
        <div className="messageSender_option">
          <PhotoLibraryIcon sx={{ fontSize: 28 }}  style={{color:"green"}}/>
          <h3>Photo / Video </h3>
        </div>
        <div className="messageSender_option">
          <InsertEmoticonIcon sx={{ fontSize: 28 }}  style={{color:"orange"}}/>
          <h3>Feeling / Activity </h3>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
          <Box className="boxer">
            <div className="headerpost">
              <h3 className="headerlabel"> Create Post </h3>
            </div>
            <button className="btn-cross" onClick={handleClose}><CloseSharpIcon  sx={{ fontSize:20 }}/></button>
            <div className="box2">
              <div className="profile">
                <div className="header_info">
                  <Avatar src={avatar}/>
                  <h4 className="h4tt"> Ali Shahbaz </h4>
                  <button className='btn-public'><PublicIcon sx={{ fontSize: 15 }} /><span  className='span'>Public</span><ArrowDropDownIcon sx={{ fontSize: 15 }}/></button>

                </div>
              </div>
              <div className='text-area'><textarea placeholder={`What's on your mind, Ali?` } className="textarea"></textarea></div>
                <div className="addons">
                  <div className='label'>
                    <h5>Add to your post</h5>
                  </div>
                  <div className='items'>
                    <VideoCallIcon className='item-margin' sx={{ color:'blue', fontSize:26 }}  />
                    <AddPhotoAlternateIcon className='item-margin' sx={{ color:'yellow', fontSize:26 }}   />
                    <LocationOnIcon className='item-margin' sx={{ color:'green', fontSize:26 }}  />
                    <MoodIcon className='item-margin' sx={{ color:'red', fontSize:26 }}   />
                    <MicNoneIcon className='item-margin' sx={{ color:'orange', fontSize:26 }}   />
                    <MoreHorizIcon className='item-margin' sx={{ color:'silver', fontSize:26 }}   />
                  </div>
                </div>
                <button className='btn-post'>Post</button>
            </div>
          </Box>
      </Modal>
    </div>
  )
}

