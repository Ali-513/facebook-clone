import React from 'react';
import SidebarRow from './SidebarRow';
import SearchIcon from '@mui/icons-material/Search';
import './SidebarGroup.css';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import InventoryIcon from '@mui/icons-material/Inventory';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import PlaceIcon from '@mui/icons-material/Place';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import BlenderIcon from '@mui/icons-material/Blender';
import CameraRollIcon from '@mui/icons-material/CameraRoll';
function importAll(r) {
  return r.keys().map(r);
}

function getAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[index] = item.replace('./', ''); });
  return images;
}



const SidebarGroup = () => {
  const shortcutimages = importAll(require.context('../../images/pages/', false, /\.(png|jpe?g|svg)$/));
  const shortcutname = getAll(require.context('../../images/pages/', false, /\.(png|jpe?g|svg)$/));
 
  return (
    <div className="sidebarvideo">
    <div className='containerdiv'>
    <div className='fixedhead'>
      <div className='watchlabel'>
        <h2>Groups</h2>
        <i className="cog icon"></i>

        </div>

        <div>
        <div className="inp">
                    <SearchIcon />
                    <input placeholder="Search Groups" type="text"/>
                </div>

        </div>
        

       
      
    

         </div>
   


  




    <div className='lsidemarket'>
    <h2 style={{color:'black',margin:'15px 10px',fontSize:'14px'}}>Groups you manage</h2>
    <SidebarRow Comp={NotificationsIcon} title="Notifications"/>
    <SidebarRow Comp={MoveToInboxIcon} title="Inbox"/>
    <SidebarRow Comp={InventoryIcon} title="Buying"/>
    <SidebarRow Comp={LoyaltyIcon} title="Selling"/>

      <div className='Categories' >
      <h2 style={{color:'black',margin:'15px 10px',fontSize:'14px'}}>Groups you've joined</h2>
     





        

    
          <SidebarRow Comp={DirectionsCarIcon} title="Vehicles"/>
          <SidebarRow Comp={PlaceIcon} title="Property Rentals"/>
          <SidebarRow Comp={BlenderIcon} title="Electronics"/>
          <SidebarRow Comp={CameraRollIcon} title="Entertainment"/>
      
      

    
        </div>

    </div>
  
    </div>
    </div>
  );
}


const mapStateToProps = (state)=>{

return{



  userData :state.authReducer
}


}

export default SidebarGroup;