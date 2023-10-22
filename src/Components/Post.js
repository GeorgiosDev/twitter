import React from 'react';
import '../styles/post.css';
import { Avatar } from '@mui/material';
import { MoreHoriz, ChatBubbleOutline, Repeat, FavoriteBorderOutlined, PublishOutlined } from '@mui/icons-material';

const Post = (props) => {
    // Destructure props object
    const { avatarImg, tweet, name, tweetImg } = props;
    // Array with icons below the tweet
    const iconsArray = [
        { id: 1, icon: <ChatBubbleOutline /> },
        { id: 2, icon: <Repeat /> },
        { id: 3, icon: <FavoriteBorderOutlined /> },
        { id: 4, icon: <PublishOutlined /> },
    ];
    return (
        <div className='post'>
            <Avatar src={avatarImg} className='post__avatar' />
            <div className='post__content'>
                <div className='post__header'>
                    <div className='post__titles'>
                        <h3 className='post__title'>{name}</h3>
                        <h4>@{name}</h4>
                    </div>
                    <MoreHoriz className='post__options' />
                </div>
                <div className='post__description'>{tweet}</div>
                {tweetImg && ( 
                    <div className='post__media'>
                        <img src={tweetImg} alt='tweet' />
                    </div>
                )}
                <div className='post__footer'>
                    {iconsArray.map((icon) => (
                        <div key={icon.id}>{React.cloneElement(icon.icon, { fontSize: 'small' })}</div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Post;
