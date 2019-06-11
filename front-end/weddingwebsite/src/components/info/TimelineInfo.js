import React from 'react';
import Timeline from './gTimeline';
import ResponsiveContainer from '../home/ResponsiveContainer';
import "./timeline.css";
import { Particles } from 'react-particles-js';
import { particlesConfig } from '../particles/particlesjs-config';
const P = Particles;

export const TimelineInfo = () => {

return (
   <ResponsiveContainer>
   <div style={{padding: '20px 0px'}}>
        <P params={{
            particles: particlesConfig.particles,
            interactivity: particlesConfig.interactivity,
        }} style={{
            position: "fixed",
            "zIndex": -1,
            background: "#fff",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            marginTop: '5em',
            padding: '20px 0px'
        }
        } />
        <Timeline
            direction="left"
            icon="users"
            time="Friday, July 12th "
            title="Welcome BBQ"
            description="Come say Hello and enjoy a low key informal evening with us! Food and drinks provided. Bring your swim suits!"
            color="teal"
            tags={['6:00pm – 9:00pm']}
            lineHeight={13}
            }}
        />
        <Timeline
            direction="right"
            icon="tree"
            time="Saturday, July 13th "
            title="Hike in the Redwood Forest"
            description="Meet at Yokayo Ranch to carpool to Redwood Reserve approx. 30 mins away for a morning hike."
            color="green"
            tags={['9:00am - 12:00pm']}
            lineHeight={13}
        />
        <Timeline
            direction="left"
            icon="map signs"
            time="Saturday, July 13th "
            title="Yokayo is CLOSED for set up"
            description="This is the 'soft close' meaning you'll have access to the site as needed however we're encouraging everyone to go explore what this beeautiful area has to offer. Hiking, swimming in the river, beer & wine tasting, golfing, and natural springs to name a few. Time to grab a new relative, friend, or an old one and head out for some fun."
            color="teal"
            tags={['10:00am - 5:00pm']}
            lineHeight={13}
        />
         <Timeline
            direction="right"
            icon="untappd"
            time="Saturday, July 13th "
            title="Meet and Mingle"
            description="Come dressed in your favorite High Fashion for an evening to remember (or so we hope)"
            color="green"
            tags={['5:00pm - 5:45pm']}
            lineHeight={13}
        />
        <Timeline
            direction="left"
            icon="heart"
            time="Saturday, July 13th "
            title="Ceremony"
            description="Time To bring out the water works, someone bring tissues for my mama!"
            color="teal"
            tags={['6:00pm - 6:30pm']}
            lineHeight={13}
        />
        <Timeline
            direction="right"
            icon="cocktail"
            time="Saturday, July 13th "
            title="Cocktail Hour"
            description="Well that was... interesting.. At least there's free booze"
            color="green"
            tags={['6:45pm - 7:45pm']}
            lineHeight={13}
        />
        <Timeline
            direction="left"
            icon="food"
            time="Saturday, July 13th "
            title="The Dinner (we will try to eat)"
            description="Enjoy our fabulously curated California Cuisine, no matter what, 'it was great' and no I don't believe you"
            color="teal"
            tags={['7:45pm - 8:45pm']}
            lineHeight={13}
        />
        <Timeline
            direction="right"
            icon="talk"
            time="Saturday, July 13th "
            title="Bad Speeches and Great Roasts"
            description='Time to pontificate and try to make sense of whats going on: classic. OR What better way to say "I love you" than making comedy out of our lives: que Tradiçional. Email For inquires'
            color="green"
            tags={['8:45pm - 9:30pm']}
            lineHeight={13}
        />
        <Timeline
            direction="left"
            icon="camera retro"
            time="Saturday, July 13th "
            title="Dancing and Celebratin’"
            description="Time to show us how you peacocked your way into, or out of, your current relationship with those ____ dance moves. It'll all be evident soon...  No I swear - you look great out there"
            color="teal"
            tags={['9:30pm - 12:00am']}
            lineHeight={13}
        />
        <Timeline
            direction="right"
            icon="fire"
            time="Sunday, July 14th "
            title="The Outlandish After Party"
            description="The kids have gone to bed and now it's time to find out if that rep you've garnered is well deserved or hogwash #turnt"
            color="green"
            tags={['12:00am - 2:00am']}
            lineHeight={13}
        />
        <Timeline
            direction="left"
            icon="camera retro"
            time="Sunday, July 14th "
            title="Farewell Brunch and Pool Party"
            description="We're never leaving! Do your walk of fame, grab a hair of the dog and recover by the pool while lavishing us praise and well-wishes before you depart back to real life"
            color="teal"
            tags={['10:00am - 2:00pm']}
            lineHeight={13}
        />
</div >
   </ResponsiveContainer>
)
}
