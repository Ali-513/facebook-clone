import React, { useState } from 'react';
import "./widgets.css";
import SideContact from './SideContact';
import MsgCard from './MsgCard';
import Ads from "./Ads";
import ad1 from '../../images/ad/Udemy.jpg'
import ad2 from '../../images/ad/daraz.jpg'
import ChatCard from '../main/ChatCard';


function Widgets() {

    const [toggle, setToggle]= useState(false);
    const [toggle2, setToggle2]= useState(false);
    const [title, setTitle] = useState('');
    const [avatar, setAvatar] = useState('');
    return (
        
        <div className="widgets">
            <div className='side'>
                <div className='adsrow' >
                <h2 style={{color:'gray',margin:'15px 10px',fontSize:'18px'}}>Sponsored</h2>
                <Ads src={ad1} title="New Coupon upto 95% Cff Courses" web='courseking.org'  />
                <Ads src={ad2} title="Try USB for Smarphones" web='daraz.pk'  />

            </div>
            <SideContact toggle={toggle2} setToggle={setToggle2} setTitle={setTitle} setAvatar={setAvatar} />
            <button onClick={()=>setToggle(!toggle)} className='btn-back'>
                <svg className='write' stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" size="20" height="21" width="21" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
            </button>

            {toggle?<MsgCard toggle={toggle} setToggle={setToggle}/>:null }
            {toggle2?<ChatCard toggle={toggle2} setToggle={setToggle2} title={title} avatar={avatar} /> : null}



        </div>
        </div>
    )
}

export default Widgets
