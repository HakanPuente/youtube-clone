import React from 'react';
import VideoCard from './VideoCard';
import "./RecommendedVideos.css"
import detay from "./detay";

function RecommendedVideos() {


    return (
        <div className="recommendedvideos">
            <h2>Recommended</h2>
            <div className="recommendedvideos__videos">
                {/* <VideoCard 
                    title="Become a Obi Wan Kenobi in 10 Minutes"
                    views="2.3M Views"
                    timestamp="3 days ago"
                    channelImage="https://media.comicbook.com/2017/01/star-wars-logo-alternate-colors-228362.jpg"
                    channel="Star Wars Co."
                    image="https://financerewind.com/wp-content/uploads/2020/09/Star-Wars-Obi-Wan-Kenobi-Disney-Plus-696x392.png"
                /> */}

                {
                    detay.map((value, index) => (
                        <VideoCard 
                            key = {index}
                            title= {value.title}
                            views= {value.views}
                            timestamp= {value.timestamp}
                            channelImage= {value.channelImage}
                            channel= {value.channel}
                            frm= {value.frm}
                        />        
                    ))
                }
                
                
                
            </div>
        </div>
    )
}

export default RecommendedVideos