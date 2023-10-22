import React from 'react'
import "../styles/feed.css"
import TweetBox from './TweetBox'
import Post from './Post'
import avatar2 from "../assets/images/avatar-2.jpg"
import avatar3 from "../assets/images/avatar-3.jpg"
import avatar4 from "../assets/images/avatar-4.jpg"
import avatar5 from "../assets/images/avatar-5.jpg"
import avatar6 from "../assets/images/avatar-6.jpg"
import avatar7 from "../assets/images/avatar-7.jpg"
import avatar8 from "../assets/images/avatar-8.jpg"
import avatar9 from "../assets/images/avatar-9.jpg"
import avatar10 from "../assets/images/avatar-10.jpg"
import avatar11 from "../assets/images/avatar-11.jpg"
import fitness from "../assets/images/fitness.jpg"
import cooking from "../assets/images/cooking.jpg"
import book from "../assets/images/book.jpg"
import art from "../assets/images/art.jpg"
import hiking from "../assets/images/hiking.jpg"

const Feed = () => {

    const avatars = [
        {
            id: 2,
            icon: avatar2,
            name: "Eleanor Simmons",
            text: "Just watched the latest sci-fi movie and I'm absolutely blown away by the stunning visuals and captivating storyline! 🚀🎥 #MovieNight"            },
        {
            id: 3,
            icon: avatar4,
            name: "Oliver Brooks",
            text: "Embarked on a culinary adventure today as I experimented with a new recipe in the kitchen. The aroma and taste are beyond satisfying! 🍳👩‍🍳 #HomeCooking",
            tweetImg:cooking
        },
        {
            id: 4,
            icon: avatar3,
            name: "Lucas Parker",
            text: "Spent the weekend exploring new hiking trails and immersing myself in the breathtaking beauty of nature. Truly a rejuvenating experience! 🌲🥾 #OutdoorAdventures",
            tweetImg: hiking
            },
            {
            id: 5,
            icon: avatar5,
            name: "Isabella Foster",
            text: "Stepped into a world of creativity at an inspiring art exhibition. The diverse range of artworks left me in awe and deep contemplation. 🎨🖼️ #ArtAppreciation",
            tweetImg:art
            },
            {
            id: 6,
            icon: avatar6,
            name: "Sophia Mitchell",
            text: "Immersed myself in a captivating novel that's taken me on an unforgettable journey. The characters and their struggles resonate deeply. 📚📖 #ReadingTime",
            tweetImg:book
            },
            {
            id: 7,
            icon: avatar7,
            name: "Aiden Clark",
            text: "Had an immensely productive coding session today, cracking through complex problems and watching my code come to life. A programmer's bliss! 💻👩‍💻 #Programming"
            },
            {
            id: 8,
            icon: avatar8,
            name: "Ava Watson",
            text: "Diving headfirst into a new fitness routine, pushing my limits and feeling the burn. The sore muscles are a testament to the progress made! 💪🏋️‍♀️ #FitnessJourney",
            tweetImg:fitness
            },
            {
            id: 9,
            icon: avatar9,
            name: "Henry Brooks",
            text: "Counting down the days until my upcoming adventure to a new city. Can't wait to explore its streets, savor local cuisines, and create lasting memories! 🗺️✈️ #TravelAdventure"
            },
            {
            id: 10,
            icon: avatar10,
            name: "Andrew Turner",
            text: "Enthusiastically catching up on the latest technology trends and innovations. The ever-evolving world of tech never fails to ignite my curiosity! 🌐🤖 #TechEnthusiast"
            },
            {
            id: 11,
            icon: avatar11,
            name: "Jack Anderson",
            text: "Basking in the tranquil ambiance of the beach, soaking in the sun's warmth and listening to the rhythmic symphony of the waves. Pure serenity. 🏖️🌊 #BeachVibes"
            }
    ];
    
    
return (
    <div className='feed'>
        <header className='feed__header'>
            <TweetBox/>
            {avatars.map((avatarItem) => {
                return <div key={avatarItem.id}><Post avatarImg = {avatarItem.icon} tweet = {avatarItem.text}  name={avatarItem.name} tweetImg ={avatarItem.tweetImg}/></div>
            })}
        </header>
        
    </div>
)
}

export default Feed
