import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import "./VideoCard.css";

function VideoCard({ frm, title, channel, views, timestamp, channelImage }) {
    return (
        <div className="videoCard">
            {/* <img className="videoCard__image" src={image} alt="" /> */}
            <iframe title={title} width="560" height="315" src={frm} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
            <div className="videoCard__info">
                <Avatar 
                    className="videoCard_avatar"
                    alt={channel}
                    src={channelImage}
                />
                <div className="video__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} * {timestamp}
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default VideoCard;