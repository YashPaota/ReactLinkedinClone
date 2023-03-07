import React from 'react';
import "./Sidebar.css";
import Avatar from '@mui/material/Avatar';

function Sidebar() {
    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
        </div>

    );
  return (
     <div className="sidebar">
        <div className="sidebar__top">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKy5ZazOSI025gPRoXA2TittZnhq1A8cOW7W0sb6ek&s" alt="trek.jpg" />
            <Avatar className="sidebar__avatar" />
            <h2>Yash Paota</h2>
            <h4>yashpaota@gmail.com</h4>
        </div>
        <div className="sidebar__stats">
           <div className="sidebar__stat">
              <p>Who viewed you</p>
              <p className='sidebar__statNumber'>2,543</p>
           </div>
           <div className="sidebar__stat">
              <p>Views on Post</p>
              <p className='sidebar__statNumber'>2,432</p>
            </div>
        </div>
        <div className="sidebar__bottom">
               <p> Recent</p>
               {recentItem("ReactJs")}
               {recentItem("Programming")}
               {recentItem("SoftwareEngineering")}
               {recentItem("JavaScript")}
               {recentItem("Developer")}
               {recentItem("Jaipur- Pink City")}
               {recentItem("Chandigarh - Beautiful City")}
               {recentItem("Bengaluru - Tech City")}
               {recentItem("Hyderabad - Cyberabad")}
               {recentItem("Paota")}
               {recentItem("Kota-Ed City")}
               {recentItem("Ajmer")}
               {recentItem("Deharadun")}

        </div>
     </div>    
     
  );
  
};

export default Sidebar;