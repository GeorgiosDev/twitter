import React from 'react';
import "../styles/sidebar.css";
import { Button } from "@mui/material";
import SideBarOption from './SideBarOption';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'; 
import HomeIcon from '@mui/icons-material/Home';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import {
  BookmarkBorder as BookmarkBorderIcon,
  ListAlt as ListAltIcon,
  NotificationsNone as NotificationsNoneIcon,
  PermIdentity as PermIdentityIcon,
  Search as SearchIcon,
  Twitter as TwitterIcon,
} from "@mui/icons-material";
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';


const Sidebar = () => {
  const imageArray = [
    { id: 'search', icon: SearchIcon, text: 'Explore' },
    { id: 'notifications', icon: NotificationsNoneIcon, text: 'Notifications' },
    { id:"messages" , icon:MailOutlineIcon, text :'Messages'},
    { id: 'bookmark', icon: BookmarkBorderIcon, text: 'Bookmarks' },
    { id: 'list', icon: ListAltIcon, text: 'Lists' },
    { id: 'identity', icon: PermIdentityIcon, text: 'Profile' },
    { id: 'More', icon: MoreHorizIcon, text: 'More' },
  ];
  
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
        await logOut();
        navigate('/');
    } catch (error) {
        console.log(error);
    }
};

  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <Button  onClick={handleLogout} lassName='sidebar__logout-btn' variant="outlined" fullWidth>Logout</Button>
      </div>
      <TwitterIcon className="sidebar__twitter-icon"/>
      <SideBarOption active Icon={HomeIcon} text="Home"/>
      {imageArray.map(item => {
        return <SideBarOption key={item.id} Icon={item.icon} text={item.text}/>;
      })}
      <Button className='sidebar__tweet-btn' variant="outlined" fullWidth>Tweet</Button>
    </div>
  );
}

export default Sidebar;
