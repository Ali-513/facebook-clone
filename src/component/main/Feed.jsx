import React, {useEffect, useState} from 'react';
import "./Feed.css";
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import avatar2 from '../../images/avatar2.jpg';
import avatar3 from '../../images/avatar3.jpg';
import avatar4 from '../../images/avatar4.jpg';
import post1 from '../../images/post/post1.jpg';
import post2 from '../../images/post/post2.webp';
import post3 from '../../images/post/post3.jpg';
import Post from './Post';


function Feed() {

    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender/>
            <Post
            key="1"
            profilePic={avatar2}
            message="Afsos"
            timestamp="32m"
            username="Muhammad Husnain"  
            image={post1}
            likes='1'
            sads='1'
            comments='188'
            counts='188'
            />


<Post
            key="2"
            profilePic={avatar3}
            message="Avengers The Endgame"
            timestamp="42m"
            username="Khurram Shahzad"  
            likes='1'
            loves='1'
            lolx='1'
            comments='15'
            video='https://player.vimeo.com/external/459802291.sd.mp4?s=c846c0ef9292600014ca216aa0be31496974e3a6&amp;profile_id=164'
            counts='8k'
            />


<Post
            key="2"
            profilePic={avatar3}
            message="Website: www.Alnawabrestaurant.com
Reservation: +971 50 553 4075
Reservation: +971 50 553 5261"
            timestamp="54m"
            username="Rashid Shami"  
            image={post2}
            likes='1'
            loves='1'
            lolx='1'
            comments='1k'
            counts='2k'
            />

<Post
            key="2"
            profilePic={avatar4}
            message=""
            timestamp="1h"
            username="Mian Ahmad Aftab"  
            image={post3}
            likes='1'
            loves='1'
            counts='25'
            comments='5'
            />

        </div>
    )
}

export default Feed
