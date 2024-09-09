import './App.css';
import React from 'react';
import Login from './component/login/Login';
import Signup from './component/login/Signup';
import { createBrowserRouter ,RouterProvider} from'react-router-dom';
import Header from './component/main/Header';
import Sidebar from './component/main/Sidebar';
import MessageSender from './component/main/MessageSender';
import Post from './component/main/Post';
import avatar2 from '../src/images/avatar2.jpg';
import post1 from '../src/images/post/post1.jpg';
import StoriesCard from './component/main/StoriesCards';
import ad2 from '../src/images/ad/daraz.jpg'


import Ads from './component/main/Ads';
import Widgets from './component/main/Widgets';
import Sidebarvideo from './component/main/Sidebarvideo';
import Feedvideo from './component/main/Feedvideo';
import SidebarGroup from './component/main/SidebarGroup';
import Index from './component/main/Index';
import Feed from './component/main/Feed';
const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Index/>
    },
    {
      path:"/signup",
      element:<Signup/>
    },
    ,
  ])
  return     < RouterProvider router={router}/>

  
}

export default App

