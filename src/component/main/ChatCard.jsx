import React from 'react';
import './chatcard.css';
import CloseIcon from '@mui/icons-material/Close';
import { Avatar } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import VideocamIcon from '@mui/icons-material/Videocam';
import RemoveIcon from '@mui/icons-material/Remove';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PhotoAlbumIcon from '@mui/icons-material/PhotoAlbum';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import GifBoxIcon from '@mui/icons-material/GifBox';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const ChatCard = ({ toggle, setToggle, avatar, title }) => {
    function importAll(r) {
        return r.keys().map(r);
    }

    const images = importAll(require.context('../../images/', false, /\.(png|jpe?g|svg)$/));

    const handleClose = () => setToggle(!toggle);

    return (
        <div className="chatcardcontainer">
            <div className="relative">
                <div className="headercontainer">
                    <div className="chatcardheader">
                        <div>
                            <div className="sidebarRow" style={{ margin: 0 }}>
                                <div className='avatarimg'>
                                    {<Avatar sx={{ width: 35, height: 35 }} src={avatar} />}
                                </div>
                                <div style={{ marginLeft: '10px' }}>
                                    <h4 style={{ margin: 0 }}>{title}</h4>
                                    <h5 style={{ margin: 0, fontWeight: 100 }}>Active now</h5>
                                </div>
                                <KeyboardArrowDownIcon style={{ fontSize: 20, marginLeft: '6px' }} />
                            </div>
                        </div>
                        <div style={{ marginRight: '8px', display: 'flex', alignItems: 'center' }}>
                            <LocalPhoneIcon style={{ fontSize: '22px', color: 'rgba(0, 0, 255, 0.618)', marginRight: '5px' }} />
                            <VideocamIcon style={{ fontSize: '22px', color: 'rgba(0, 0, 255, 0.618)', marginRight: '5px' }} />
                            <RemoveIcon style={{ fontSize: '22px', color: 'rgba(0, 0, 255, 0.618)', marginRight: '5px' }} />
                            <button onClick={handleClose}><CloseIcon sx={{ fontSize: 25 }} /></button>
                        </div>
                    </div>
                </div>
                <div className="chatcardmain">
                    <div className="firstinteraction">
                        <Avatar sx={{ width: 70, height: 70 }} src={avatar} />
                        <h2 style={{ margin: '5px 0px' }}>{title}</h2>
                        <h5 style={{ margin: '5px 0px', fontWeight: 100, color: 'gray' }}>Facebook</h5>
                        <h5 style={{ margin: '5px 0px', fontWeight: 100, color: 'gray' }}>You're friends on Facebook</h5>
                        <h5 style={{ margin: '5px 0px', fontWeight: 100, color: 'gray' }}>Lives in Lahore, Pakistan</h5>
                        <h6 style={{ margin: '20px 0px', fontWeight: 500, fontSize: '10px', color: 'gray' }}>5/30/13, 5:12 PM</h6>
                    </div>
                    <div className="msgarea">
                        {/* Message area content */}
                    </div>
                    <div className="inputpanel">
                        <AddCircleIcon sx={{ fontSize: '25px' }} />
                        <PhotoAlbumIcon sx={{ fontSize: '25px' }} />
                        <StickyNote2Icon sx={{ fontSize: '25px' }} />
                        <GifBoxIcon sx={{ fontSize: '25px' }} />
                        <div className='inputtextarea'>
                            <InputBase className="inputcomp" placeholder="Aa" inputProps={{ 'aria-label': 'search google maps' }} />
                            <IconButton color="primary" sx={{ fontSize: "20px" }} aria-label="directions">
                                <EmojiEmotionsIcon sx={{ fontSize: '25px' }} />
                            </IconButton>
                        </div>
                        <ThumbUpIcon sx={{ fontSize: '25px' }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatCard;
