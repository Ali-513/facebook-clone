import React from 'react';
import SidebarRow from './SidebarRow';
import './Sidebar.css';
import avatar from '../../images/avatar.jpg'

function importAll(r) {
    return r.keys().map(r);
  }
  
  function getAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[index] = item.replace('./', ''); });
    return images;
  }

const Sidebar = () => 
    {
        const images = importAll(require.context('../../images/icons/', false, /\.(png|jpe?g|svg)$/));
        const getname = getAll(require.context('../../images/icons/', false, /\.(png|jpe?g|svg)$/));
  
  
        const simages = importAll(require.context('../../images/icons/special', false, /\.(png|jpe?g|svg)$/));
        const sgetname = getAll(require.context('../../images/icons/special', false, /\.(png|jpe?g|svg)$/));
  
        const shortcutimages = importAll(require.context('../../images/icons/shortcut/', false, /\.(png|jpe?g|svg)$/));
        const shortcutname = getAll(require.context('../../images/icons/shortcut/', false, /\.(png|jpe?g|svg)$/));
    return (
        
    <div className="sidebar">
        <div className="lside">
            <SidebarRow src={avatar} nobadge='true' title="Ali Shahbaz"/>
            {
                simages.map((item,index)=>(
                <SidebarRow Icon={item} title={sgetname[index].replace('.png','')}/>
                ))
            }
            {
                images.map((item,index)=>(
                <SidebarRow Icon={item} title={getname[index].replace('.png','')}/>
                ))
            }
            <div className='shortcuts' >
                <h2 style={{color:'gray',margin:'15px 10px',fontSize:'18px'}}>Your shortcuts</h2>
                {   
                    shortcutimages.map((item,index)=>(
                    <SidebarRow Icon={item} title={shortcutname[index].replace(/\.(?:jpg|png)$/i,'')}/>
                    ))
                }           
            </div>
        </div>
    </div>
  );
}


export default Sidebar;
