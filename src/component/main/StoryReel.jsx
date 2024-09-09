import React, { useState } from 'react';
import Story from './Story';
import { NoEncryption } from '@mui/icons-material';
import './StoryReel.css'
import StoriesCards from './StoriesCards';

import ReelsCards from '../main/ReelsCard';
function StoryReel() {
   

  const [obj,setobj] = useState('active');
  const [obj2,setojb2]=useState('');
  const [property,setproperty] = useState('flex');
  const [property2,setproperty2]=useState('none');
        const stiyle = {

            display:"none"

        }


   const eventHandler = ()=>{

        setobj('active');
        setojb2('');
        setproperty('flex');
        setproperty2('none');


    }
   
    const eventHandler2 = ()=>{

        
        setobj('');
        setojb2('active');
        setproperty('none');
        setproperty2('flex');
    }
 
   
    return (
        <div className="storyReel">
            
            {/* Story */}


          

            <div className='tab'>
            <div className={`btn1 ${obj}-border`}>
            <button className={`tab-btn ${obj}`} onClick={eventHandler} >Stories</button>
            </div>
            
            <div className={`btn2 ${obj2}-border`}>
            <button className={`tab-btn ${obj2}`} onClick={eventHandler2} >Reels</button>
            </div>  
            </div>
<StoriesCards display={property}/>
<ReelsCards display={property2}/>





        </div>
    )
}

export default StoryReel
