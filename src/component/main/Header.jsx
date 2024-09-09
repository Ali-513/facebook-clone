import React from 'react'
import "./header.css";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import StorefrontOutlined from '@mui/icons-material/StorefrontOutlined';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import FlagIcon from '@mui/icons-material/Flag';
import avatar from '../../images/avatar.jpg'
import { Avatar } from '@mui/material';
import { Badge } from '@mui/material';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Header = ({setSelected,selected}) => {
  const [dropdown,setdropdown] =useState(0);
  const style={
    marginBottom:"20px"
  }
const handle=()=>{ 
    if(dropdown===1)
    {
        setdropdown(0);  
    }
    else
    {
       setdropdown(1);
    }
}
const navigator=()=>{
  navigate("/")
  localStorage.removeItem("token")
}
const navigate = useNavigate();
  return (
    <div className='header'>
      <div className="header_left">
          <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" alt=""/>
          <div className="header_input">
            <SearchIcon />
            <input placeholder="Search Facebook" type="text"/>
          </div>
      </div>
      <div className="header_center">
        <div className={`header_option ${selected==0 &&" header_option--active"}`}>
          <HomeIcon fontSize ="large" onClick={()=>setSelected(0)}/>
        </div>
        <div className={`header_option ${selected==1 &&" header_option--active"}`}>
          <OndemandVideoIcon fontSize ="large" onClick={()=>setSelected(1)}/>
        </div>
        <div className={`header_option ${selected==2 &&" header_option--active"}`}>
        
          <StorefrontOutlined fontSize ="large" onClick={()=>setSelected(2)} />
        </div>
        <div className={`header_option ${selected==3 &&" header_option--active"}`}>
        
          <FlagIcon fontSize ="large" onClick={()=>setSelected(3)}/>
        </div>
        <div className={`header_option ${selected==4 &&" header_option--active"}`}>
        
          <SportsEsportsIcon fontSize ="large" onClick={()=>setSelected(4)}/>
        </div>        
      </div>
      <div className="header_right">
        <div className="header_info">
          <Avatar src={avatar} />                  
            <h4 className="h4" style={style}> Ali Shahbaz </h4>
        </div>
        <div className='btndiv'>
          <button className='menu-button'  ><i className="align justify icon"></i></button>
          <button className='menu-button'><i className="facebook messenger icon"></i></button>
          <Badge badgeContent={4} color="warning">
            <button className='menu-button'> <i className="bell icon"></i></button>
          </Badge>
          <button className='menu-button'onClick={()=>handle()}>
            <i className='caret down icon'></i>
          </button>               
        </div>
      {dropdown==1 &&
        <Paper sx={{width : 320,maxWidth : '100%'}}className="dropdown">
          
          <MenuItem className='spec' >
            <div className="sidebarRow hover" style={{margin:0}}>
              <div>{<Avatar  sx={{ width: 55, height: 55 }} src={avatar}/>}</div>     
              <div style={{marginLeft:'10px'}}>
                <h4  style={{margin:0}}> Ali Shahbaz </h4>
                <h5 style={{margin:0,fontWeight:100}}>See your profile</h5>
              </div>
            </div>
          </MenuItem>
          <hr></hr>
          <MenuList>
            <MenuItem className='dropdowmitems'>
              <ListItemIcon>
                <i className="cog icon"></i>
              </ListItemIcon>
              <ListItemText className="heading">Setting & Privacy</ListItemText>
              <i className="chevron right icon"></i>
            </MenuItem>
            <MenuItem className='dropdowmitems'>
              <ListItemIcon>
                <i className="question circle icon"></i>
              </ListItemIcon>
              <ListItemText className='heading'>Help & Support</ListItemText>
              <i className="chevron right icon"></i>
            </MenuItem>
            <MenuItem className='dropdowmitems'>
              <ListItemIcon>
                <i className="moon icon"></i>
              </ListItemIcon>
              <ListItemText className='heading'>Display & Accesibility</ListItemText>
                <i className="chevron right icon"></i>
            </MenuItem>
            <MenuItem className='dropdowmitems'>
              <ListItemIcon>
                <i className="edit icon"></i>
              </ListItemIcon>
              <ListItemText className='heading'>Give feedback</ListItemText>
            </MenuItem>     
            <MenuItem className='dropdowmitems' >
              <ListItemIcon>
                <i className="sign-out icon"></i>
              </ListItemIcon>
              <ListItemText className='heading' onClick={()=>navigator()}>Log out</ListItemText>
            </MenuItem>
          </MenuList>
        </Paper>
      }
      </div>
      
    </div>
  )
}

export default Header
