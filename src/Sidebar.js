import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Sidebar.css";

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    )


    return (
        <div className='sidebar'>
           <div className="sidebar_top">
               <img src="https://wallpaperaccess.com/full/267434.jpg" alt=""/>
               <Avatar />
               <h2>your name</h2>
               <h4>your@email.com</h4>
            </div>   

            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who viewed you</p>
                    <p className="sidebar_statNumber">178</p>
                </div>
                <div className="sidebar_stat">
                    <p>Views on post</p>
                    <p className="sidebar_statNumber">21</p>
                </div>
            </div>
            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('softwareengineering')}
                {recentItem('javascript')}
            </div>
        </div>
    )
}

export default Sidebar
