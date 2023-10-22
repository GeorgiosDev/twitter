import React from 'react';
import "../styles/tweetBox.css";
import { Avatar } from '@mui/material';
import {
    ImageOutlined,
    GifBoxOutlined,
    PollOutlined,
    SentimentSatisfiedAltOutlined,
    CalendarTodayOutlined,
    LocationOnOutlined
} from "@mui/icons-material";

const TweetBox = () => {
    const iconsArray = [
        { id: 1, icon: <ImageOutlined /> },
        { id: 2, icon: <GifBoxOutlined /> },
        { id: 3, icon: <PollOutlined /> },
        { id: 4, icon: <SentimentSatisfiedAltOutlined /> },
        { id: 5, icon: <CalendarTodayOutlined /> },
        { id: 6, icon: <LocationOnOutlined /> }
    ];

    return (
        <div className='tweetbox'>
            <form className=' tweetbox__form'>
                <Avatar className='tweetbox__avatar' />
                <div className="tweetbox__form-field">
                    <div className="tweetbox__input">
                        <input type="text" placeholder="What's happening" />
                    </div>
                    <div className="tweetbox__input">
                        <div className="tweetbox__icons">
                            {iconsArray.map((icon) => (
                                <p key={icon.id} className='tweetbox__icon'>{icon.icon}</p>
                            ))}
                        </div>
                        <button className='tweetbox_btn'>Tweet</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default TweetBox;
