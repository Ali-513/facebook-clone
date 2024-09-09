import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import SidebarRow from './SidebarRow';
import './SidebarMarketplace.css';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import InventoryIcon from '@mui/icons-material/Inventory';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import PlaceIcon from '@mui/icons-material/Place';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import BlenderIcon from '@mui/icons-material/Blender';
import CameraRollIcon from '@mui/icons-material/CameraRoll';
const SidebarMarketplace = () => {
  return (
    <div className='sidebarvideo'>
        <div className="container">
            <div className="fixedhead">
                <div className="watchlabel">
                    <h2>Marketplace</h2>
                    <i className='cog icon'></i>
                </div>
                <div className="inp">
                    <SearchIcon/>
                    <input type="text" placeholder='Search Marketplace'/>
                </div>
            </div>
            <div className="lsidemarket">
                <SidebarRow Comp={NotificationsIcon} title="Notifications"/>
                <SidebarRow Comp={MoveToInboxIcon} title="Inbox"/>
                <SidebarRow Comp={InventoryIcon} title="Buying"/>
                <SidebarRow Comp={LoyaltyIcon} title="Selling"/>
            
            <div className="Categories">
                <h2 style={{color:'gray',margin:'15px 10px',fontSize:'18px'}}>Categories</h2>
                <SidebarRow Comp={DirectionsCarIcon} title="Vehicles"/>
                <SidebarRow Comp={PlaceIcon} title="Property Rentals"/>
                <SidebarRow Comp={BlenderIcon} title="Electronics"/>
                <SidebarRow Comp={CameraRollIcon} title="Entertainment"/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default SidebarMarketplace
