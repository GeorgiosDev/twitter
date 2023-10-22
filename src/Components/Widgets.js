import React from 'react'
import "../styles/widgets.css"
import {TwitterTimelineEmbed} from "react-twitter-embed"

const Widgets = () => {
  return (
    <div className='widgets'>
        <TwitterTimelineEmbed
          className = "widgets__container"
          sourceType="profile"
          screenName="saurabhnemade"
          options={{height: 600}}
        />
    </div>
  )
}

export default Widgets
