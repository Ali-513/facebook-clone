import React from 'react'
import SidebarRow from './SidebarRow';
import SearchIcon from '@mui/icons-material/Search';
import './SidebarMarketplace.css';
import CameraRollIcon from '@mui/icons-material/CameraRoll';
import GamesIcon from '@mui/icons-material/Games';
import AttractionsIcon from '@mui/icons-material/Attractions';
import SleddingIcon from '@mui/icons-material/Sledding';
import ArchitectureIcon from '@mui/icons-material/Architecture';
function importall(r){
    return r.keys().map(r);
}
function getall(r){
    let images = {};
    r.keys().map((item, index)=>{images[index]=item.replace('./',' ');});
    return images;
}
const SidebarGame = () => {

    const shortcutimages = importall(require.context('../../images/gaming/', false, /\.(png|jpe?g|svg)$/));
    const shortcutname = getall(require.context('../../images/gaming/', false, /\.(png|jpe?g|svg)$/));
  return (
    <div className='sidebarvideo'>
        <div className="container">
            <div className="fixedhead">
                <div className="watchlabel">
                    <h2> Gaming</h2>
                    <i className='cog icon'></i>
                </div>
                <div className="inp">
                    <SearchIcon/>
                    <input type="text" placeholder='Search Gaming' />
                </div>
            </div>
            <div className="lsidemarket">
                <h2 style={{color:'black',margin:'15px 10px',fontSize:'14px'}}>Streamers You Follow</h2>
                {
                    shortcutimages.map((item,index)=>(
                        <SidebarRow Icon={item} title={shortcutname[index].replace(/\.(?:jpg|png)$/i,'')}/>                        
                    ))
                }
            </div>
            <div className='Categories' >
                <h2 style={{color:'black',margin:'15px 10px',fontSize:'14px'}}>Categories</h2>
                <SidebarRow Comp={GamesIcon} title="All games"/>
                <SidebarRow Comp={AttractionsIcon} title="Action"/>
                <SidebarRow Comp={SleddingIcon} title="Adventure"/>
                <SidebarRow Comp={ArchitectureIcon} title="Arcade"/>
                <SidebarRow Comp={CameraRollIcon} title="Entertainment"/>
            </div>

        </div>
      
    </div>
  )
}

export default SidebarGame
