import React from 'react';
import "../styles/SideBarOption.css";

const SideBarOption = (props) => {
  const { text, Icon, active } = props; 
  return (
    <div className={`sidebar-option ${active ? "sidebar-option__active" : ""}`}>
      <Icon className="sidebar-option__icon" />
      <h2 className='sidebar-option__label'>{text}</h2>
    </div>
  );
}

export default SideBarOption;
