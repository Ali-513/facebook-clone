import React from 'react';
import SidebarRow from './SidebarRow';
import SearchIcon from '@mui/icons-material/Search';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import './Sidebarvideo.css';



function importAll(r) {
  return r.keys().map(r);
}

function getAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[index] = item.replace('./', ''); });
  return images;
}



const Sidebarvideo = () => {
  const shortcutimages = importAll(require.context('../../images/pages/', false, /\.(png|jpe?g|svg)$/));
  const shortcutname = getAll(require.context('../../images/pages/', false, /\.(png|jpe?g|svg)$/));
 
  return (
    <div className="sidebarvideo">
    <div className='containerdiv'>
    <div className='fixedhead'>
      <div className='watchlabel'>
        <h2>Watch</h2>
        <i className="cog icon"></i>

        </div>

        <div>
        <div className="inp">
                    <SearchIcon />
                    <input placeholder="Search Videos" type="text"/>
                </div>

        </div>
        

       
      
    

         </div>
   


  




    <div className='lsidevideo'>
     
    <SidebarRow Comp={OndemandVideoIcon} title="Home"/>
    <SidebarRow Comp={VideoCameraFrontIcon} title="Live"/>
    <SidebarRow Comp={PlaylistPlayIcon} title="Shows"/>
    <SidebarRow Comp={BookmarkIcon} title="Saved Videos"/>

      <div className='shortcuts' >
      <h2 style={{color:'gray',margin:'15px 10px',fontSize:'18px'}}>Your Watchlist</h2>
     


      {


        
shortcutimages.map((item,index)=>(

    
          <SidebarRow Icon={item} title={shortcutname[index].replace(/\.(?:jpg|png)$/i,'')}/>
      
      

          ))
}
{


        
shortcutimages.map((item,index)=>(

    
          <SidebarRow Icon={item} title={shortcutname[index].replace(/\.(?:jpg|png)$/i,'')}/>
      
      

          ))
}
     
        </div>

    </div>
  
    </div>
    </div>
  );
}




export default Sidebarvideo;